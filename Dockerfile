FROM node:12
WORKDIR /var/www/iniciando-back-end
COPY ./package.json .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3333
