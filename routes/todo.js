const router = require('express').Router();

const Todo = require('../models/Todo');


//add tarea
router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({todo});
    newTodo.save()
    .then( () => {
        console.log('guardado');
        res.redirect('/');
    })
    .catch(err => console.log(err));
})


.get('/delete/todo/:_id', (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({_id})
    .then( () => {
        console.log('guardado');
        res.redirect('/');
    })
    .catch(err => console.log(err));
});

module.exports = router;