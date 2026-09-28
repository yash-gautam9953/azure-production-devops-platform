FROM node:22-alpine

WORKDIR /app

# Update npm to a version containing the fixed sigstore dependency
RUN npm install -g npm@11.20.0

COPY app/package*.json ./

RUN npm ci --omit=dev

COPY app/ .

EXPOSE 3000

USER node

CMD ["node", "server.js"]