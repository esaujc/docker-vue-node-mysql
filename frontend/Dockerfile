FROM node:14-alpine3.12

ENV VUE_APP_BACKEND_URL=localhost:3005

# install simple http server for serving static content
RUN npm install -g http-server 

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 3000

# execute the app in http-server port 3000
CMD [ "http-server", "-p3000", "dist" ]
