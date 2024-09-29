FROM node:18.6

WORKDIR /app

COPY . /app

RUN npm install

#EXPOSE 3001
ENV PORT=3000
EXPOSE ${PORT}

CMD ["node", "server.js"]
#CMD ["npm", "run", "dev"]

