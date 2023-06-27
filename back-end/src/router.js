const express = require('express');
const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');


// (endpoint, callback(request, response) => {})
router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateEdit, tasksController.updateTask);

module.exports = router;
