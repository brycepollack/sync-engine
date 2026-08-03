import type { CheckConnectionResult, Request } from '@hesprs/sync-engine-sdk';
import type { UrlStyle } from './sigv4';
import { buildUrlWithQuery } from './url';

export type S3ConnectionOptions = {
	endpoint: string;
	region: string;
	bucket: string;
	urlStyle: UrlStyle;
};

export async function checkConnection(
	options: S3ConnectionOptions,
	request: Request,
): Promise<CheckConnectionResult> {
	try {
		const url = buildUrlWithQuery(
			{
				bucket: options.bucket,
				endpoint: options.endpoint,
				key: '/',
				urlStyle: options.urlStyle,
			},
			{ 'list-type': '2', 'max-keys': '1' },
		);
		const response = await request({ method: 'GET', url });
		if (response.status >= 200 && response.status < 300) return { success: true } as const;
		return {
			reason: `HTTP ${response.status}`,
			success: false,
		} as const;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		return { reason: errorMessage, success: false } as const;
	}
}
