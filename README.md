# Redis-PubSub-NodeJs-Express
#Redis PubSub Node.js Express
    Using for sending notifications and updating the database.

# Install Redis Server
    Pull the latest Redis Stack Server Docker image:

    `sudo docker pull redis/redis-stack-server:latest`

 # Run Redis through Docker:
    `sudo docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest`

 Note:

This command installs the latest version of the Redis server.
Here, we are exposing the Redis port from Docker to the local host on port 6379.
# Install Redis CLI
To connect to Redis through the command line, install Redis CLI tools:   
    `sudo apt install redis-tools`

#Connect to Redis Server
Use the following command to connect to the Redis server:
    `redis-cli -h 127.0.0.1 -p 6379`
   
Node.js Project Setup
To use Redis Pub/Sub with Node.js and Express, you need to set up your project:

Initialize a new Node.js project:
mkdir redis-pubsub-nodejs-express
cd redis-pubsub-nodejs-express
npm init -y

# Install necessary packages:
npm install express ioredis dotenv

# Create a .env file in the root directory of your project:

HOST_NAME=localhost
REDIS_POST=6379
REDIS_PASSWORD:
REDIS_CHANNEL=local_channel

# Run the application:

npm run start