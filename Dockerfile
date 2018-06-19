# Base image
FROM node:9.6.1

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy and install data
COPY . /usr/src/app
RUN npm install --silent

# Start app
CMD ["npm", "start"]
