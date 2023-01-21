const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
});

const District = mongoose.model('District', DistrictSchema);
module.exports = District;
