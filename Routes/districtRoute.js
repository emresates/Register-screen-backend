const router = require('express').Router();
const District = require('../Models/District');
const City = require('../Models/City');

//todo Create a District
router.post('/create', async (req, res) => {
  try {
    const newDistrict = new District({
      name: req.body.name,
      city: req.body.city,
    });

    const district = await newDistrict.save();

    res.status(200).json(district);
  } catch (err) {
    res.status(500).json(err);
  }
});

//todo Get Districts
router.get('/', async (req, res) => {
  const city = req.query.city;
  try {
    let district;
    if (city) {
      district = await District.find({ city });
    } else {
      district = await District.find();
    }
    res.status(200).json(district);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
