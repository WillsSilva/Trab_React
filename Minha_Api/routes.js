// Importando as dependências do projeto
const express = require('express');
const routes = express.Router();
// Referencia o Controller CourseController
const CourseController = require('./controllers/BookController');
// associa as rotas ao seu método do Controller
routes.get('/Books', CourseController.index);
routes.get('/Books/:id', CourseController.show);
routes.post('/Books', CourseController.store);
routes.put('/Books/:id', CourseController.update);
routes.delete('/Books/:id', CourseController.delete);
module.exports = routes;


