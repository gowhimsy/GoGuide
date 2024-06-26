---
order: 1
title: Docker
icon: mdi:docker
head:
  - - meta
    - name: keywords
      content: docker, 容器, 虚拟化, 容器引擎
---

## Docker 介绍

Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，与虚拟机相似，但是占用资源更少。一台主机一般只能运行几十台虚拟机，但是可以同时运行几百上千个容器。

::: info 什么是容器？(Container)
容器就是将应用程序及其依赖，打包在一个文件系统中，包含了一切运行所需的东西，如代码、运行时、系统工具、系统库等，保证应用在任何环境下都能运行。容器是独立于平台的，可以在开发环境、测试环境、生产环境中运行。
:::

### 为什么使用 Docker？

在没有容器之前，开发人员在开发环境中编写代码，然后将代码部署到测试环境，最后再部署到生产环境。这种方式存在很多问题，如环境不一致、部署麻烦、开发环境和生产环境不一致等。Docker 的出现解决了这些问题，使得开发、测试、生产环境一致，提高了开发效率。

::: info Docker 的优势

- **快速交付**：Docker 可以快速部署，可以在几秒或者几十秒内启动或停止容器。
- **一致运行环境**：Docker 可以保证开发环境、测试环境、生产环境一致。
- **高效利用系统资源**：Docker 可以在一台主机上运行多个容器，提高资源利用率。
- **轻量级**：Docker 利用容器共享主机内核，不需要运行完整的操作系统，因此比虚拟机更轻量级。
- **易于维护**：Docker 可以快速部署、快速启动、快速停止，维护成本低。
- **可移植性**：Docker 可以在任何平台上运行。
- **开源**：Docker 是开源的，社区活跃，有大量的镜像可以使用。
- **安全**：Docker 使用沙箱机制，相互之间不会有任何接口，提高了安全性。
- **生态丰富**：Docker 生态丰富，有大量的工具可以使用。
- **持续集成**：Docker 可以与持续集成工具结合，实现持续集成。
- **快速扩展**：Docker 可以快速扩展，可以根据需求快速增加或减少容器。

:::

### 常用 Docker 命令

| 描述             | 命令                               |
| :--------------- | :--------------------------------- |
| 查看 Docker 版本 | `docker --version`                 |
| 查看 Docker 信息 | `docker info`                      |
| 查看 Docker 镜像 | `docker images`                    |
| 查看 Docker 容器 | `docker ps` 或 `docker ps -a`      |
| 拉取镜像         | `docker pull 镜像名称`             |
| 运行容器         | `docker run -it 镜像名称`          |
| 启动容器         | `docker start 容器ID`              |
| 停止容器         | `docker stop 容器ID`               |
| 重启容器         | `docker restart 容器ID`            |
| 进入容器         | `docker exec -it 容器ID /bin/bash` |
| 删除容器         | `docker rm 容器ID`                 |
| 删除镜像         | `docker rmi 镜像ID`                |
| 查看容器日志     | `docker logs -f 容器ID`            |

