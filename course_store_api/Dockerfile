FROM ubuntu:22.04
RUN apt-get update && apt-get install -y openjdk-17-jdk maven
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/CRUD-0.0.1-SNAPSHOT.jar"]

