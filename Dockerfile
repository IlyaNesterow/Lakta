#dockerfile for production
FROM node:14.15.4-alpine3.10 as builder
WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html