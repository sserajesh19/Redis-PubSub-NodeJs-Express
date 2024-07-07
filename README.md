# Redis-PubSub-NodeJs-Express
# Redis PubSub Node.js Express
    Using for sending notifications and updating the database.

# Install Redis Server
    Pull the latest Redis Stack Server Docker image:

        `sudo docker pull redis/redis-stack-server:latest`

 # Run Redis through Docker:
    `sudo docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest`

 Note:
    1. This command installs the latest version of the Redis server.
    2. Here, we are exposing the Redis port from Docker to the local host on port 6379.
# Install Redis CLI
    To connect to Redis through the command line, install Redis CLI tools:   
        `sudo apt install redis-tools`

#Connect to Redis Server
    Use the following command to connect to the Redis server:
        `redis-cli -h 127.0.0.1 -p 6379`
   
Node.js Project Setup
To use Redis Pub/Sub with Node.js and Express, you need to set up your project:

Initialize a new Node.js project:
    `mkdir redis-pubsub-nodejs-express
    cd redis-pubsub-nodejs-express
    npm init -y `

# Install necessary packages:
    `npm install express ioredis dotenv`

# Create a .env file in the root directory of your project:
    `
    HOST_NAME=localhost
    REDIS_POST=6379
    REDIS_PASSWORD:
    REDIS_CHANNEL=local_channel
`
# Run the application:

    `npm run start`

# Redis Configuration 
Redis has a configuration parameter called maxclients that sets the maximum number of simultaneous connections. By default, this is set to 10,000, but it can be increased if your system resources allow. Note that each subscriber counts as a client.
   
   ` maxclients 10000`


# Practical Considerations
    In practical scenarios, users have reported using Redis with thousands of subscribers without issues. However, if you plan to have a very large number of subscribers (tens of thousands or more), you might need to:

# Optimize your Redis configuration.
    Use multiple Redis instances or clusters to distribute the load.
    Monitor and tune system resources (CPU, memory, network).
    Consider horizontal scaling strategies.
# Monitoring and Scaling
    To ensure that your Redis server can handle the required number of subscribers, you should:

    * Monitor Resource Usage: Use tools like Redis' built-in monitoring (INFO command) and external monitoring tools to keep track of CPU, memory, and network usage.
    * Load Testing: Perform load testing to determine the maximum number of subscribers your setup can handle. Tools like Redis-benchmark and custom scripts can help simulate the load.
    * Cluster Mode: For very high scalability, consider using Redis in cluster mode, which allows you to scale horizontally by distributing the data across multiple nodes. 
      
# To increase the maxclients setting, you can add or modify the line in your redis.conf file:

    `maxclients 20000`
    