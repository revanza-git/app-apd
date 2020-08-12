#stage1 - Build app
FROM node:14-alpine3.12 as build
WORKDIR /var/www/html
ENV PATH /app/node_modules/.bin:$PATH
COPY ./app/package.json /var/www/html
RUN yarn config set "strict-ssl" false
RUN yarn
COPY ./app/ /var/www/html
RUN yarn build

#stage2 - build server,final image and copy react build.
FROM nginx:1.9-alpine
COPY --from=build /var/www/html/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8111

CMD ["nginx","-g","daemon off;"]