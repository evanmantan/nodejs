const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get todos'});
    }
};

// Create a new todo
exports.createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;
        const todo = new Todo({
            title,
            completed,
        });
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed creating new todo' })
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(id, {
            title,
            completed,
        }, { new: true })
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed updating a todo'});
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed deleting a todo' });
    }
};