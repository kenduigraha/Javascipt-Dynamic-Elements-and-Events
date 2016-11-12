const express = require('express')
const router = express.Router()

const controller = require('../controllers/todos')

/* GET All Todos. */
router.get('/', controller.allTodos)

/* Process One Todos. */
router.post('/', controller.addTodo);

/* Process Mark 1 Todo as Done */
router.post('/:id', controller.markTodo);

/* Process Edit Todos. */
router.put('/:id', controller.editTodo);

/* Process Delete Todos. */
router.delete('/:id', controller.deleteTodo);

module.exports = router;
