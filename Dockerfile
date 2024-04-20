FROM node:20-alpine
USER root
ENV APP_DIR="/app"

WORKDIR ${APP_DIR}

COPY ["package.json", "package-lock.json*", "./"]
RUN npm update
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "index.js"]