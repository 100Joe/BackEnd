const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const partner = mongoose.model('partner', partnerSchema);

module.exports = partner;