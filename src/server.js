const http = require('http');
const htmlResponses = require('./htmlResponses');
const mediaResponses = require('./mediaResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
            htmlResponses.getPage(request, response, `client.html`);
            break;
        case '/page2':
            htmlResponses.getPage(request, response, `client2.html`);
            break;
        case '/page3':
            htmlResponses.getPage(request, response, `client3.html`);
            break;    
        case '/party.mp4':
            mediaResponses.getMedia(request, response, '../client/party.mp4', 'video/mp4');
            break;
        case '/bling.mp3':
            mediaResponses.getMedia(request, response, '../client//bling.mp3', 'audio/mp3');
            break;
        case '/bird.mp4':
            mediaResponses.getMedia(request, response, '../client/bird.mp4', 'video/mp4');
            break;
        default: 
            htmlResponses.getPage(request, response, `client.html`);
            break;
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
