const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TodoSchema = new schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;