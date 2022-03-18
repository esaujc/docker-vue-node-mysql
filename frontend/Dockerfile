FROM node:14-alpine3.12

ENV VUE_APP_BACKEND_URL=localhost:3005

# instalar un simple servidor http para servir nuestro contenido estático
RUN npm install -g http-server 

# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicación para producción minificada
RUN npm run build

EXPOSE 3000
CMD [ "http-server", "-p3000", "dist" ]