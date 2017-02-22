const url = require('url');
const fs = require('fs');
const http = require('http');
const

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {

  var urlParts = url.parse(req.url);

  switch (urlParts.pathname) {
    case "/":
      displayHome(urlParts.pathname, req, res);
      break;
    case "/favourite_food":
      displayFood(urlParts.pathname, req, res);
      break;
    case "/favourite_movies":
      displayMovies(urlParts.pathname, req, res);
      break;
    case "/favourite_css":
      displayCSS(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

function displayHome (url, req, res) {
 	fs.readFile('./home.html', 'utf8', function(error, data){
 		res.end(data)
 		res.writeHead(200, { "Content-Type": "text/html" });
 	})
  
  

}

function displayFood(url, req, res) {
	fs.readFile('./favourite_food.html', 'utf8', function(error, data){
 		res.end(data)
 		res.writeHead(200, { "Content-Type": "text/html" });
 	})
  
  
}
function displayMovies(url, req, res) {
	fs.readFile('./favourite_movies.html', 'utf8', function(error, data){
 		res.end(data)
 		res.writeHead(200, { "Content-Type": "text/html" });
 	})
  
}

function displayCSS(url, req, res) {
	fs.readFile('./favourite_css.html', 'utf8', function(error, data){
 		res.end(data)
 		res.writeHead(200, { "Content-Type": "text/html" });
 	})
  
  
}

function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}