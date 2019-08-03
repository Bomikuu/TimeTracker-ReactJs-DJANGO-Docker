FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
RUN npm install -i axios
RUN npm install -i antd
RUN npm install -i react-router-dom

EXPOSE 3000
CMD ["npm", "start"]
