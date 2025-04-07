# 配置环境基础镜像
FROM node:18-alpine

# 创建目录
RUN mkdir -p /app/elpis-demo

# 设置并进入工作目录
WORKDIR /app/elpis-demo

# 复制 内容 到工作目录
COPY . /app/elpis-demo

# 设置时区环境变量
ENV TimeZone=Asia/Shanghai

# 暴露应用运行的端口
EXPOSE 8081

# 启动应用
ENTRYPOINT npm run beta
