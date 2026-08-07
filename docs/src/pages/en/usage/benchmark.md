# Benchmark

All benchmark results are recorded here, see [deep dive: benchmarking](../deep-dive/benchmarking) for benchmarking details. Sync Engine welcomes everyone contributing benchmarking results as long as it follows the steps specified in the spec.

---

- **Benchmarked plugin**: Sync Engine
- **Obsidian version**: 1.13.4
- **Plugin version**: 3.0.0 + `webdav` module 0.1.7
- **Operating system**: NixOS 26.11
- **CPU single core score**: around 1700
- **Backend type**: WebDAV
- **Service**: Self-hosted Nextcloud
- **Average ping**: 400 ms
- **Average upload speed**: 2.6 MiB/s
- **Average download speed**: 4.8 MiB/s

During local testing, Nextcloud connection is delayed and bandwidth is limited to simulate middle-to-low network quality.

| Benchmark Item                            | Result                                        |
| ----------------------------------------- | --------------------------------------------- |
| Average startup time                      | 25.4 ms                                       |
| 2000 files upload                         | 9.43 min                                      |
| 2000 files download                       | 5.87 min                                      |
| Daily simulation<br>(Original, 10 rounds) | Min: 1.04 s<br>Median: 1.44 s<br>Max: 48.56 s |
| Daily simulation<br>(Replica, 10 rounds)  | Min: 1.06 s<br>Median: 1.72 s<br>Max: 3.49 s  |
| Correctness validation                    | 0 errors                                      |

---

- **Benchmarked plugin**: Remotely Save
- **Obsidian version**: 1.13.4
- **Plugin version**: 0.5.25
- **Operating system**: NixOS 26.11
- **CPU single core score**: around 1700
- **Backend type**: WebDAV
- **Service**: Self-hosted Nextcloud
- **Average ping**: 400 ms
- **Average upload speed**: 2.6 MiB/s
- **Average download speed**: 4.8 MiB/s

During local testing, Nextcloud connection is delayed and bandwidth is limited to simulate middle-to-low network quality.

| Benchmark Item                            | Result                                    |
| ----------------------------------------- | ----------------------------------------- |
| Average startup time                      | 251 ms                                    |
| 2000 files upload                         | 16.4 min                                  |
| 2000 files download                       | 13.68 min                                 |
| Daily simulation<br>(Original, 10 rounds) | Min: 99 s<br>Median: 129 s<br>Max: 326 s  |
| Daily simulation<br>(Replica, 10 rounds)  | Min: 111 s<br>Median: 117 s<br>Max: 204 s |
| Correctness validation                    | 0 errors                                  |

**Conclusion**: Sync Engine shows 10x faster startup than Remotely Save. In terms of syncing performance, Sync Engine is visibly faster than Remotely Save in terms of full upload and download. In the more realistic daily sync test, Remotely Save fails catastrophically and Sync Engine is around **100x faster** than Remotely Save.

---

- **Benchmarked plugin**: Nextcloud Sync
- **Obsidian version**: 1.13.4
- **Plugin version**: 0.7.38
- **Operating system**: NixOS 26.11
- **CPU single core score**: around 1700
- **Backend type**: WebDAV
- **Service**: Self-hosted Nextcloud
- **Average ping**: 400 ms
- **Average upload speed**: 2.6 MiB/s
- **Average download speed**: 4.8 MiB/s

During local testing, Nextcloud connection is delayed and bandwidth is limited to simulate middle-to-low network quality.

| Benchmark Item                            | Result                                        |
| ----------------------------------------- | --------------------------------------------- |
| Average startup time                      | 18.6 ms                                       |
| 2000 files upload                         | 17.95 min                                     |
| 2000 files download                       | 5.22 min                                      |
| Daily simulation<br>(Original, 10 rounds) | Min: 1.27 s<br>Median: 2.75 s<br>Max: 60.55 s |
| Daily simulation<br>(Replica, 10 rounds)  | Min: 0.4 s<br>Median: 3.94 s<br>Max: 55.33 s  |
| Correctness validation                    | 98 errors                                     |

**Conclusion**: Nextcloud Sync shows slight advantage on startup performance. However, although claimed to be optimized for Nextcloud, it still shows visible disadvantage in terms of performance compared with Sync Engine. More importantly, it **fails to sync 98 original files or changes to the replica**, and many errors appeared during the testing process.
