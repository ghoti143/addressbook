`docker build -t addressbook .`
`docker-compose up -d`

```
curl -w "\n" \
       -X PUT \
       -d "firstName=Bobbie&lastName=Draper" \
       localhost:3000/persons
```

`curl -w "\n" localhost:3000/persons/all`