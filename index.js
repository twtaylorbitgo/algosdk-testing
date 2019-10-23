const algosdk = require('algosdk');

const tx = '';

const decode = algosdk.decodeObj(Buffer.from(tx, 'base64'));

console.dir(decode)