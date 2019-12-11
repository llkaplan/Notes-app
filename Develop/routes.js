const url = require('url');
let fs = require('fs');

//routes

html = {
    render(path, response) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('file not found');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
}

handleRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let path = url.parse(request.url).pathname;

    switch (path) {
        case '/home':
            html.render('public/index.html', response);
            break;
        case '/notes':
            html.render('public/notes.html', response);
            break;
        default:
            response.writeHead(404);
            response.write('Route not found');
            response.end();
    }
}
