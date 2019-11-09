var WebSocketServer = require('websocket').server;
var http = require('http');
var port = 1337;

var server = http.createServer(function (request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});
server.listen(port, function () {
    console.log(`listening on port ${port}`);
 });

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// On request is triggered each time a client tries to connect to the server
wsServer.on('request', function (request) {
    console.log(`Connection request from: ${request.origin}`);
    var connection = request.accept(null, request.origin);

    connection.on('message', function (message) {
        // display an object like: {type: 'utf8', utf8Data: 'Blabla'}
        console.debug(message);

        // No difference between send and sendUTF
        connection.send(`Thank you through send`);
        connection.sendUTF(`Thank you through sendUTF`);

        // Sending object can only be done via JSON.stringify
        var obj = {
            time: (new Date()).getTime(),
            author: "Mooky",
            color: "black"
        };

        connection.sendUTF(JSON.stringify(obj));
    });

    connection.on('close', function (connection) {
        // When connection to client is closed
        console.log("connection closed");
    });
});