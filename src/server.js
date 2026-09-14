const http = require('http');
const htmlResponses = require('./htmlResponses');
const mediaResponses = require('./mediaResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
            htmlResponses.getIndex(request, response);
            break;
        case '/party.mp4':
            mediaResponses.getParty(request, response);
            break;
        default: 
            htmlResponses.getIndex(request, response);
            break;
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
