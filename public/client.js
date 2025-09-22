const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    address: String,
    date: { type: String, required: true }, // <-- new field for date (string like "2025-09-18")
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);
