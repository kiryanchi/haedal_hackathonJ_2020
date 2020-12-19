const { response } = require('express');
const express = require('express');
const app = express();

app.listen(9999, () => {
    console.log('listening on 9999');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/write', (request, response) => {
    response.sendFile(__dirname + '/write.html');
})