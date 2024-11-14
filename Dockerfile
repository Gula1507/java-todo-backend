FROM eclipse-temurin:23
LABEL maintainer="gulya@gmx.net"
EXPOSE 8080
COPY backend/target/todo-app.jar todo-app.jar
ENTRYPOINT ["java","-jar","todo-app.jar"]
