# Benchmark

All benchmark results are recorded here, see [deep dive: benchmarking](../deep-dive/benchmarking) for benchmarking details.

---

- **Date**: 2026-08-05
- **Benchmarked plugin**: Sync Engine
- **Obsidian version**: 1.13.4
- **Plugin version**: 3.0.0-beta-20 + `webdav` module
- **Operating system**: NixOS 26.11
- **CPU single core score**: around 1700
- **Backend type**: WebDAV
- **Service**: Self-hosted Nextcloud (delayed and bandwidth limited to simulate real service)
- **Average ping**: 300 ms
- **Average upload speed**: 3 MiB/s
- **Average download speed**: 5 MiB/s

| Benchmark Item       | Result  |
| -------------------- | ------- |
| Average startup time | 25.4 ms |
