const serverless = require('serverless-http')
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send({ mensagem: 'Olé Mundo' })
})

app.listen(3333);

module.exports.handler = serverless(app)