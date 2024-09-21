# Dockerfile

FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json src/yarn.lock ./
RUN yarn install
COPY src/ .
RUN chmod +x run.sh
EXPOSE 3000
CMD ["sh", "run.sh"]
