# ReactiveChat

There are two branches:
1) "master" - the implementation with websockets, pure modules structure and Jest tests
2) "polling" - the implementation with polling + redux-saga

## FrontEnd

Url http://localhost:4000
```cd frontend
npm i
npm run dev
```

## BackEnd

Url http://localhost:8080
```
cd backend
mvn clean install
java -jar target/chat-0.0.1-SNAPSHOT.jar
```

## DB
H2 - http://localhost:8080/h2-console/login.jsp
JDBC URL: jdbc:h2:mem:chatdb
