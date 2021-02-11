#dockerfile for production
FROM node:alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
#CMD ["npm", "run", "build"]
RUN npm run build

FROM nginx
EXPOSE 443
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html 