#Build Web Site
FROM node as builder
RUN mkdir hn-tool
WORKDIR /hn-tool
COPY . .
RUN npm install
RUN mkdir build
RUN npm run build

#Forward Port
FROM nginx
RUN apt update
RUN apt install -y vim
COPY ./docker/node/conf/frontend.conf /etc/nginx/conf.d/frontend.conf

COPY --from=builder /hn-tool/build /var/www/html/web

RUN mkdir -p /var/www/html/web
RUN chown -R nginx:nginx /var/www/html/web

RUN mkdir -p /var/cache/nginx/
RUN chown -R nginx:nginx /var/cache/nginx/
RUN chown -R nginx:nginx /var/log/nginx/

RUN mkdir -p /etc/nginx/ssl/ 
RUN chown -R nginx:nginx /etc/nginx/ssl/
RUN chmod -R 755 /etc/nginx/ssl/

RUN touch /var/run/nginx.pid 
RUN chown nginx:nginx /var/run/nginx.pid

USER nginx

CMD ["nginx", "-g", "daemon off;"]