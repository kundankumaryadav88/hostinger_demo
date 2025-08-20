FROM node:22.14.0

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install && \
    npm install -g nodemon && \
    chown -R node:node .

# Bundle app source
COPY --chown=node:node . .

# Switch to non-root user
USER node

# Verify express installation
RUN node -e "require('express')"

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
