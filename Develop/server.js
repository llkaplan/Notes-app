// Dependencies
var http = require("http");
var fs = require("fs");
let route = require('./routes');

var PORT = 3000;
function sendPage(path, response) {
    const page = fs.readFileSync(path, { encoding: 'uft8' }
    );
    response.end(page)
};

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

    const path = request.url;
    let documentPath = '';

    switch (path) {
        case '/':
            let documentPath = `./routes/index.html`;
            sendPage(documentPath, response);
        case '/foods':
            let documentPath = `./routes/favorite-foods.html`;
            sendPage(documentPath, response);
        default:
            let notFound = fs.readFileSync(
                './html/not-found-page.html',
                { encoding: 'utf8' }
            );
            response.end(notFound);
    }
}

// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);


// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

