const express = require('express');
const useragent = require('express-useragent');

const app = express();
app.use(useragent.express());
app.get('/', (request, response) => {
  response.json({
    ipaddress: request.headers['x-forwarded-for'].split(',')[0],
    language: request.headers['accept-language'].split(',')[0],
    software: `${request.useragent.platform}, ${request.useragent.os}`,
  });
});
app.listen(process.env.PORT || 3000);
