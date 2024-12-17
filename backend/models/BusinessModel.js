const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    address: String,
    category: String,
    timing: String,
    contact: Number,
    image: String,
    
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('businesss', mySchema);
