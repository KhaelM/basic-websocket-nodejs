var connection = new WebSocket(`ws://192.168.88.15:1337`);
// if user is running mozilla then use it's built-in WebSocket
window.WebSocket = window.WebSocket || window.MozWebSocket;

connection.onopen = function () {
    console.log("connection opened");  
};

connection.onerror = function () {
    console.log("onerror triggered");
}

// Triggered After receiving message from server
connection.onmessage = function(messageEvent) {
    console.log(messageEvent);
}

function createNewWebSocket() {
    connection = new WebSocket(`ws://192.168.88.15:1337`);
}

function sendMessageToServer() {
    connection.send("Hello server");
}