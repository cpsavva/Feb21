// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTA = 7000;
var PORTB = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Is heaven missing an angel?");
}

function handleRequestTwo (request, response){
	response.end("You need a makeover!");
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverA = http.createServer(handleRequestOne);
var serverB = http.createServer(handleRequestTwo);

// Here we start our server so that it can begin listening to client requests.
serverA.listen(PORTA, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTA);

});

serverB.listen(PORTB, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTB);

});
