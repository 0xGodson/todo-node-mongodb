const express = require('express');
const router = express.Router();
const todo = require('../model/todo')

router.get('/', (req, res) => {
    res.status(404).send("404 Not Found Bro")
})
router.post('/', async(req, res) => {
    const newTodo = {
        todo: req.body.todo
    }
    try{
        const addTodo = await todo.create(newTodo)
        res.redirect('/')       
    }catch (err){
        console.log(err)
        res.status(400).send("Something Went wrong")
    }
   
})
module.exports = router