FROM node:14-alpine3.12

WORKDIR /usr/src/app

# ENV MYSQL_URL=localhost
# ENV MYSQL_ROOT_PWD=insecurebydefault 
# ENV MYSQL_USER=root 
# ENV MYSQL_USER_PWD=insecurebydefault 
# ENV MYSQL_USER_DB=projectdocker

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 3005
CMD ["npm", "start"]
