const https = require('https');
const fs = require('fs');

// Load the private key and certificate
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem'),
    passphrase: 'ajit' // Replace with the actual passphrase
};

// Create the HTTPS server
https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end(fs.readFileSync('index.html'));
}).listen(8080, () => {
    console.log('HTTPS server running on https://localhost:8443');
});
