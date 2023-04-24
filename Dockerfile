# Using the official Node.js image as the base image
FROM node:18.15.0

# Seting up the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Installing the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the .env file to the working directory
COPY .env ./

# Exposing the port that the app is running on
EXPOSE 3000

# Starting the application
CMD ["npm", "start"]