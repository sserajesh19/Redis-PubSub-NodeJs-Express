
import Redis from 'ioredis';

const subscriber = new Redis();

const subscribeChannel = (CHANNEL)=>{
    subscriber.subscribe(CHANNEL, (err, count) => {
        if (err) {
            console.error('Failed to subscribe: %s', err.message);
        } else {
            console.log(`Subscribed successfully! This client is currently subscribed to ${count} channels.`);
        }
    });
    
    
    subscriber.on('message', (channel, message) => {
        console.log(`Received message from [${channel}]: ${message}`);
    });
}

export default subscribeChannel;