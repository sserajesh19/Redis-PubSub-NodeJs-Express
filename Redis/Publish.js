
import Redis from 'ioredis';
const publisher = new Redis();

const publishMessage = (CHANNEL, message)=>{
    publisher.publish(CHANNEL, message, (err, numberOfSubscribers) => {
        if (err) {
            console.error('Failed to publish: %s', err.message);
        } else {
            console.log(`Message sent to ${numberOfSubscribers} subscribers`);
        }
    });
}

export default publishMessage;