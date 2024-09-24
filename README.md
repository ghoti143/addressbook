h/t https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application

`docker-compose up -d`

`yarn run migrate`

`yarn start:dev`

```
curl -w "\n" \
       -X PUT \
       -d "firstName=Bobbie&lastName=Draper" \
       localhost:3000/people
```

`curl -w "\n" localhost:3000/people`

todo: turn into typescript+es6 https://benjamin-chavez.com/blog/creating-a-typescript-express.js-web-application-with-es6-step-by-step-guide
