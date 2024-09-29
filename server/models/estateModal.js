const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  id: { type: Number, required: true },
  image: { type: String, required: true },
  purpose: { type: String, required: true },
  type: { type: String, required: true },
  area: { type: Number, required: true },
  rooms: { type: Number, required: true }
});

const Estate = mongoose.models.Estate || mongoose.model('Estate', estateSchema);

module.exports = Estate;
