'use strict'
const Todo = require('../models/todos')

/*
  * @api {GET} /api/todos
  * @api purpose get all todos
  * @apiName alltodos
  * @apiGroup todos
  *
  * @apiSuccess show all Todo's content {String}
*/
let allTodos = (req, res) => {
  Todo.find({}, (err, all_todos) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!all_todos) res.status(404).json({'message': 'Failed to get all todos'})

    res.status(200).json(all_todos)
  }).sort({_id: -1})
}

/*
  * @api {POST} /api/todos
  * @api purpose post one new Todo
  * @apiName addTodo
  * @apiGroup todos
  *
  * @apiSuccess new Todo's content {String}
*/
let addTodo = (req, res) => {
  console.log(req.body.content);
  Todo.create({
    content: req.body.content,
    status: false
  }, (err, new_Todo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_Todo) res.status(404).json({'message': 'Failed to add Todo'})

    res.status(200).json(new_Todo)
  })
}

/*
  * @api {POST} /api/todos/:id
  * @api purpose post one specific Todo and mark as done(true)
  * @apiName markTodo
  * @apiGroup todos
  *
  * @apiSuccess edit Todo's content {String}
*/
let markTodo = (req, res) => {
  Todo.findOneAndUpdate({
    _id: req.params.id
  }, {
    status : true
  }, {
    new : true
  }, (err, marked_Todo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!marked_Todo) res.status(404).json({'message': 'Failed to mark Todo'})

    res.status(200).json(marked_Todo)
  })
}

/*
  * @api {PUT} /api/todos/:id
  * @api purpose put one specific Todo
  * @apiName editTodo
  * @apiGroup todos
  *
  * @apiSuccess edit Todo's content {String}
*/
let editTodo = (req, res) => {
  Todo.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new : true
  }, (err, updated_Todo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!updated_Todo) res.status(404).json({'message': 'Failed to updated Todo'})

    res.status(200).json(updated_Todo)
  })
}

/*
  * @api {DELETE} /api/todos/:id
  * @api purpose delete one specific Todo
  * @apiName deleteTodo
  * @apiGroup todos
  *
  * @apiSuccess delete Todo's content {String}
*/
let deleteTodo = (req, res) => {
  Todo.findOneAndRemove({
    _id: req.params.id
  }, (err, deleted_Todo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!deleted_Todo) res.status(404).json({'message': 'Failed to delete Todo'})

    res.status(200).json(deleted_Todo)
  })
}

module.exports = {
  allTodos  : allTodos,
  addTodo  : addTodo,
  markTodo : markTodo,
  editTodo  : editTodo,
  deleteTodo: deleteTodo
}
