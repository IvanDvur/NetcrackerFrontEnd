FROM docker.io/node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest
COPY --from=builder /app/dist/ /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
