const EventEmitter = require('events');
const HacxK = new EventEmitter();

async function ownEvent(sock) {
    sock.ev.on('messages.upsert', async ({ messages }) => {
        for (const m of messages) {
            HacxK.emit('hacxk.messages', m);
        }
    });
}

module.exports = { ownEvent, HacxK };