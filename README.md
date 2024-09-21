h/t https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application

`docker build -t addressbook .`

`docker-compose up -d`

```
curl -w "\n" \
       -X PUT \
       -d "firstName=Bobbie&lastName=Draper" \
       localhost:3000/persons
```

`curl -w "\n" localhost:3000/persons/all`