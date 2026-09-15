const fs = require('fs');

const getPage = (request, response, pagePath) => {
    const path = fs.readFileSync(`${__dirname}/../client/${pagePath}`);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(path);
    response.end();
}

module.exports.getPage = getPage;