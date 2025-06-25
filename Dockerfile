FROM nginx:alpine

COPY main.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t menu-cart . && docker run -d -p 8001:80 --name MENU menu-card:latest