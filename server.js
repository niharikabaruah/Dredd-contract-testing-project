// server.js
const express = require('express');
const app = express();
const port = 3000;

 //Disable the X-Powered-By header
app.disable('x-powered-by');

// Disable ETag headers
app.set('etag', false);

// Middleware to control and remove unwanted headers
app.use((req, res, next) => {
  // Override or remove specific headers
  res.removeHeader('Content-Length'); // Override Content-Length
  res.removeHeader('Date');            // Remove Date header
  res.removeHeader('Connection'); // Set Connection to close
  next();
});

// Endpoint that returns a 200 OK response
app.get('/api/v1/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'Niharika Baruah' }]);
});

// Endpoint that returns a 400 Bad Request response
app.get('/api/v1/bad-request', (req, res) => {
  res.status(400).json({ error: 'Invalid request parameters' });
});

// Endpoint that returns a 500 Internal Server Error response
app.get('/api/v1/server-error', (req, res) => {
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
