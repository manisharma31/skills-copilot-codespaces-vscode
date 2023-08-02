// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser to parse HTTP request body as JSON
app.use(bodyParser.json());

// Create in-memory database
const db = require('./db');

// Create a new comment
app.post('/comments', (req, res) => {