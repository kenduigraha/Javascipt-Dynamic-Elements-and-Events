'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let TodoSchema = new Schema({
  content: String,
  status: Boolean
}, {
  timestamps: true
})

module.exports = mongoose.model('Todos', TodoSchema)
