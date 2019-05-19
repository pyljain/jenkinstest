FROM node
COPY . /app
EXPOSE 8080
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
