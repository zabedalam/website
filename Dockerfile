FROM node:alpine
WORKDIR /website/src/app
ENV PATH /website/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
