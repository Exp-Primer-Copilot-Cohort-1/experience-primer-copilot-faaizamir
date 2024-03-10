// Create web server
// Use http module to create server
// Use express framework to create server
// Use body-parser middleware to parse request body
// Use comments module to manage comments
// Add route to get all comments
// Add route to add comment
// Add route to update comment
// Add route to delete comment
// Start server and listen on port 3000

// Load modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var comments = require('./comments');

// Create server
var app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Add route to get all comments
app.get('/comments', function (req, res) {
    res.json(comments.get());
});

// Add route to add comment
app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.add(comment);
    res.status(201).json(comment);
});

// Add route to update comment
app.put('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = req.body;
    comments.update(id, comment);
    res.status(200).json(comment);
});

// Add route to delete comment
app.delete('/comments/:id', function (req, res) {
    var id = req.params.id;
    comments.remove(id);
    res.status(204).end();
});

// Start server
http.createServer(app).listen(3000, function () {
    console.log('Server is listening on port 3000');
});
// End of comments.js

// Path: comments.js
// Create comments module
// Use comments array to store comments
// Add get method to get all comments
// Add add method to add comment
// Add update method to update comment
// Add remove method to delete comment

// Load modules
var comments = [];

// Add get method to get all comments
exports.get = function () {
    return comments;
};

// Add add method to add comment
exports.add = function (comment) {
    comments.push(comment);
};

// Add update method to update comment
exports.update = function (id, comment) {
    comments[id] = comment;
};

// Add remove method to delete comment
exports.remove = function (id) {
    comments.splice(id, 1);
};
// End of comments.js

// Path: server.js
// Create web server
//