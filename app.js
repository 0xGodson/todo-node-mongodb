const express = require('express');
const app = express();
const mongoose = require('mongoose')
const todo = require('./model/todo')
const add = require('./routes/add')
const deleteTodo = require('./routes/delete')
mongoose.connect('mongodb://localhost/todo-app', {
    useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection.on('error', () => {
    console.log('Error While Connecting to the database')
});
mongoose.connection.once('open', () => {
    console.log("DB Connected!")
});

app.use(express.urlencoded({ extended: false}))
app.set("view engine", "ejs");
app.use('/add', add)
app.use('/delete', deleteTodo)

app.get('/', async(req,res) => {
    const allTodos = await todo.find()
    res.render('index', {todo: allTodos})
})

app.listen(process.env.PORT || 5000)