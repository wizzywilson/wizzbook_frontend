FROM node:10.7.0

RUN mkdir /app/
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY angular.json /app/
COPY tsconfig.json /app/
COPY tslint.json /app/
COPY src /app/src/

RUN npm cache clean -f; npm install -g npm@6.1.0;
RUN npm install -g @angular/cli@6.2.4;
RUN npm install;
EXPOSE 4000