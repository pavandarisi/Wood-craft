FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Verify that Node.js and npm are installed
RUN node -v && npm -v

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port (change if needed)
EXPOSE 5173

# Set environment variable to development
ENV NODE_ENV=development

# Command to run the application
CMD ["sh", "-c", "npm run dev"]