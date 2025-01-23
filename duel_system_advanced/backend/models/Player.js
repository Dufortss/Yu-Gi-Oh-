
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lifePoints: { type: Number, default: 8000 },
    deck: { type: [Object], default: [] }
});

module.exports = mongoose.model('Player', playerSchema);
    