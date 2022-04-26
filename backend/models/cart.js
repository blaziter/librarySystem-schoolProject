const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    books: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Cart", cartSchema);