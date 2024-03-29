const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);