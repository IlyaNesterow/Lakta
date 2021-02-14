#dockerfile for production
FROM node:alpine as builder
ARG PORT
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN echo $PORT
COPY . .
#CMD ["npm", "run", "build"]
RUN npm run build

FROM nginx
EXPOSE 80
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html 
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'