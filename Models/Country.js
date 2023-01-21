const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
  },
});

const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;
