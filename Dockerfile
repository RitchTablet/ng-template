# Dockerfile multi-stage para Angular 20 producción

# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build:prod

# Etapa 2: Servidor NGINX para servir archivos estáticos
FROM nginx:1.27-alpine AS prod
COPY --from=build /app/dist/ng-template /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
