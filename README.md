# VUE+(HTTP-SERVER OR NGINX) - NODEJS-EXPRESS-API - MYSQL (docker-compose)

## MYSQL Container

First step is start mysql container from docker-compose file.

```bash
# Download mysql image and create the container
$ sudo docker-compose -f docker-compose.mysql up

# Insert example data - mysqlsampledatabase.sql
$ sudo docker exec -i <container_id> mysql -u root -pinsecurebydefault < mysqlsampledatabase.sql

# Stop the container
$ sudo docker stop <container_id>

# Start again the container without lost of data
$ sudo docker-compose -f docker-compose.mysql.yml start

```
We use part of the database example from (https://www.mysqltutorial.org/mysql-sample-database.aspx).
Thank you very much.


## Scenario 1 - MYSQL (container), FrontEnd (local Vue), Backend (local Express+Nodejs)

```bash
# Start MYSQL Container 
$ sudo docker-compose -f docker-compose.mysql.yml start

# Backend - Move to 'backend' folder and install dependencies
$ npm install

# Check backend .env file
- PORT=3005
- MYSQL_URL=localhost
- MYSQL_ROOT_PWD=insecurebydefault 
- MYSQL_USER=root 
- MYSQL_USER_PWD=insecurebydefault 
- MYSQL_USER_DB=projectdocker

# Serve with hot reload at localhost:3005
$ npm run dev

# Frontend - Move to 'frontend' folder and install dependencies
# If you want to change the port, check the scripts in package.json
$ npm install

# Check frontend .env file
- VUE_APP_BACKEND_URL=localhost:3005

# Serve with hot reload at localhost:3000
$ npm run dev

# Navigation http://localhost:3000 or http://localhost:3000/#
# If you have problems with navigation try to clean cache navigator or use private tab.

```


## Scenario 2 - Docker-Compose: MYSQL (container), FrontEnd (container VUE+(http-server or Nginx), Backend (container Nodejs+Express)

```bash
# Start all containers with docker-compose
$ sudo docker-compose -f docker-compose.all.yml up

# Start again the containers without lost of data
$ sudo docker-compose -f docker-compose.all.yml start

# If you need to stop and remove all containers, networks, and all images used by any service
$ docker-compose -f docker-compose.all.yml down --rmi all

# Navigation http://localhost:3000 or http://localhost:3000/#
# If you have problems with navigation try to clean cache navigator or use private tab.

```

### Frontend 

There are two dockerfiles: 
- Dockerfile: configured to use the front docker on http-server 
- Dockerfile_nginx: configured to use the front docker on Nginx server. 


## Special Directories

In folder "Nginx" (inside "frontend" directory) is the Nginx basic configuration. This configuration is used in container. 

## Bugs

Nginx configuration fails. Needs to check.

## Usefull links

- https://www.npmjs.com/package/mysql

- https://www.w3schools.com/nodejs/nodejs_mysql.asp

- https://www.bezkoder.com/docker-compose-nodejs-mysql/


