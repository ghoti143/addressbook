FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json yarn.lock tsconfig.json run.sh ./
RUN chmod +x run.sh
RUN yarn install
COPY src/ .
RUN yarn tsc
EXPOSE 3000
CMD ["sh", "run.sh"]
