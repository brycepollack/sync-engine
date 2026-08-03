import type { S3Translations } from './setting';

export const en: S3Translations = {
	accessKeyId: 'Access key ID',
	accessKeyIdDescription: 'Enter your S3 access key ID.',
	accessKeyIdPlaceholder: 'E.g. AKIAI...',
	bucket: 'Bucket name',
	bucketDescription: 'Enter the name of your S3 bucket.',
	bucketPlaceholder: 'my-bucket',
	endpoint: 'Endpoint URL',
	endpointDescription: 'Enter the S3 endpoint URL',
	endpointPlaceholder: 'E.g. https://s3.us-east-1.amazonaws.com',
	prefix: 'Prefix',
	prefixDescription:
		'Configure the key prefix that your vault will be synced to. "/" stands for the root of the bucket.',
	prefixPlaceholder: 'E.g. my-vault/',
	proxyUrl: 'Proxy URL',
	proxyUrlDescription:
		'Optional proxy URL to route S3 requests through. Leave empty to connect directly.',
	proxyUrlPlaceholder: 'E.g. https://proxy.example.com',
	region: 'Region',
	regionDescription: 'Enter the region of your S3 bucket.',
	regionPlaceholder: 'E.g. us-east-1',
	s3: 'S3',
	secretAccessKey: 'Secret access key',
	secretAccessKeyDescription:
		'Enter your S3 secret access key. It is stored in Obsidian keychain.',
	urlStyle: 'URL style',
	urlStyleDescription: (frag) => {
		frag.appendText('Select the URL style for your S3 service. Virtual-hosted style: ');
		frag.createEl('code', { text: 'https://bucket.s3.amazonaws.com' });
		frag.appendText('. Path style: ');
		frag.createEl('code', { text: 'https://s3.amazonaws.com/bucket' });
		frag.appendText('. Some S3-compatible services require path style.');
	},
	urlStylePath: 'Path style',
	urlStyleVirtualHosted: 'Virtual-hosted',
};

export const zh: S3Translations = {
	accessKeyId: 'Access Key ID',
	accessKeyIdDescription: '请输入您的 S3 Access Key ID。',
	accessKeyIdPlaceholder: '例如：AKIAI...',
	bucket: '存储桶名称（Bucket）',
	bucketDescription: '请输入您的 S3 存储桶名称。',
	bucketPlaceholder: 'my-bucket',
	endpoint: '端点 URL',
	endpointDescription: '请输入 S3 端点 URL',
	endpointPlaceholder: '例如：https://s3.us-east-1.amazonaws.com',
	prefix: '前缀',
	prefixDescription: '配置 Vault 将同步到的键前缀。"/" 代表存储桶根目录。',
	prefixPlaceholder: '例如：my-vault/',
	proxyUrl: '代理 URL',
	proxyUrlDescription: '可选的代理 URL，用于路由 S3 请求。留空则直接连接。',
	proxyUrlPlaceholder: '例如：https://proxy.example.com',
	region: '区域',
	regionDescription: '请输入您的 S3 存储桶所在的区域。',
	regionPlaceholder: '例如：us-east-1',
	s3: 'S3',
	secretAccessKey: 'Secret Access Key',
	secretAccessKeyDescription:
		'请输入您的 S3 Secret Access Key。它将安全地存储在 Obsidian 密钥环中。',
	urlStyle: 'URL 样式',
	urlStyleDescription: (frag) => {
		frag.appendText('选择适用于您的 S3 服务的 URL 样式。虚拟主机样式（Virtual-hosted）：');
		frag.createEl('code', { text: 'https://bucket.s3.amazonaws.com' });
		frag.appendText('。路径样式（Path）：');
		frag.createEl('code', { text: 'https://s3.amazonaws.com/bucket' });
		frag.appendText('。某些 S3 兼容的服务要求使用路径样式。');
	},
	urlStylePath: '路径样式（Path）',
	urlStyleVirtualHosted: '虚拟主机样式（Virtual-hosted）',
};
