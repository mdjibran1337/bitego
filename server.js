const { PeerServer } = require('peer');
const peerServer = PeerServer({ port: process.env.PORT || 9000, path: '/' });
console.log('BiteGo Custom PeerJS Server running...');
