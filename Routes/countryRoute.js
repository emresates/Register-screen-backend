const router = require('express').Router();
const Country = require('../Models/Country');

//todo Create a Country
router.post('/create', async (req, res) => {
  try {
    const newCountry = new Country({
      name: req.body.name,
    });

    const country = await newCountry.save();
    res.status(200).json(country);
  } catch (err) {
    res.status(500).json(err);
  }
});

//todo Get all Countries
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
