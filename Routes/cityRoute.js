const router = require('express').Router();
const City = require('../Models/City');
const Country = require('../Models/Country');

//todo Create a city
router.post('/create', async (req, res) => {
  try {
    const newCity = new City({
      name: req.body.name,
      country: req.body.country,
    });

    const city = await newCity.save();

    res.status(200).json(city);
  } catch (err) {
    res.status(500).json(err);
  }
});

//todo Get Cities
router.get('/', async (req, res) => {
  const country = req.query.country;
  try {
    let city;
    if (country) {
      city = await City.find({ country });
    } else {
      city = await City.find();
    }
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
