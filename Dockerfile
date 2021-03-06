FROM ubuntu:14.04.2
RUN apt-get update
RUN apt-get install -y nodejs npm nodejs-legacy
RUN npm install -g http-server
ADD ./dist /app
RUN apt-get install -y nano links
CMD http-server ./app