FROM node:22.14.0

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install && \
    npm install -g nodemon && \
    chown -R node:node /app

# Bundle app source
COPY . .

# Switch to non-root user
USER node

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
