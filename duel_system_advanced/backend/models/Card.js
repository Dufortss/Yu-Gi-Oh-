
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['monster', 'spell', 'trap'], required: true },
    description: { type: String },
    effectScript: { type: String, required: true },
    targetType: { type: String },
    conditions: { type: Object }
});

module.exports = mongoose.model('Card', cardSchema);
    