const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const todo = require('../model/todo')

router.get('/', (req, res) => {
    res.status(404).send("404 Not Found Bro")
})

router.get('/:id', async (req, res) => {
    const id = {
        _id : req.params.id
    }
    try{
        const deleteTodo = await todo.deleteOne(id)
        res.redirect('/')
    }catch (err){
        console.log(err)
        res.status(400).send("Something Went Wrong")
    }
    
})

module.exports =router