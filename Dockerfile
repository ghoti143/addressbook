# Dockerfile

FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json src/yarn.lock run.sh ./
RUN chmod +x run.sh
RUN yarn install
COPY src/ .
EXPOSE 3000
CMD ["sh", "run.sh"]
