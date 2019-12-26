FROM node:10-slim

ENV TZ=utc-8 \
    PORT=8080


COPY . .

RUN npm install -g http-server
EXPOSE ${PORT}

CMD http-server dist
