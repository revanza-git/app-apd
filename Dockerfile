#stage1 - Build app
FROM node:14-alpine3.12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn config set "strict-ssl" false
RUN yarn
COPY . /app
RUN yarn build

#stage2 - build server,final image and copy react build.
FROM nginx:1.9-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8111

CMD ["nginx","-g","daemon off;"]