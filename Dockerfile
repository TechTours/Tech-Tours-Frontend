# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React Vite application
RUN npm run build

# Expose the port the app runs on (make sure it matches your Vite config)
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
