var http = require("http");
var url = require("url");

function start(routing) {
    http.createServer(function (request, response) {
        // console.log("Nadeszło żądanie");
        var pathName = url.parse(request.url).pathname;
        // console.log(pathName, "path?");

        if (!routing[pathName]) {
            pathName = '/404';
        }

        routing[pathName](request, response);

        // response.writeHead(200, {"Content-type": "text/plain"});
        // response.end("Witaj");
    }).listen(9090, "127.0.0.1");

    console.log("Server działa na http://127.0.0.1:9090/");
}

exports.start = start;