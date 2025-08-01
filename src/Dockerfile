
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
