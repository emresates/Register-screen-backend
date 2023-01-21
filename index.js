const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const countryRoute = require('./Routes/countryRoute');
const cityRoute = require('./Routes/cityRoute');
const districtRoute = require('./Routes/districtRoute');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* MongoDb Connections
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

//* Route Directions
app.use('/country', countryRoute);
app.use('/city', cityRoute);
app.use('/district', districtRoute);

//* Working props
app.get('/', (req, res) => {
  res.send('app is running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
