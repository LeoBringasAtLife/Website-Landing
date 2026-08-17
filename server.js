// Importing the necessary modules for the server and automatically reloading the browser.
const express = require('express');
const livereload = require('livereload');
const app = express();

// Configure the current folder as static and index2.html as the main file.
app.use(express.static(__dirname, { index: 'index2.html' }));

// Start the server on port 3000 and log the URL in the console.
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

// LiveReload, just like before.
const lrserver = livereload.createServer();
lrserver.watch(__dirname);