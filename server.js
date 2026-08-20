// importing the necessary modules for the server and automatically reloading the browser.
const express = require('express');
const livereload = require('livereload');
const app = express();

// configure the current folder as static and index.html as the main file.
app.use(express.static(__dirname, { index: 'index.html' }));

// start the server on port 3000 and log the URL in the console.
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

// liveReload, just like before.
const lrserver = livereload.createServer();
lrserver.watch(__dirname);