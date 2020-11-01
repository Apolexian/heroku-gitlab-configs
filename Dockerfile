FROM adoptopenjdk/openjdk11:latest

RUN mkdir -p /app

WORKDIR /app

COPY build/libs/app.jar ./app.jar

EXPOSE $PORT

CMD [ "java", "-jar", "./app.jar" ]
