// routes/audience.js
const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

router.post('/audience', async (req, res) => {
  const { conditions } = req.body; // Example: { totalSpending: { $gt: 10000 }, visits: { $lte: 3 } }
  try {
    const audience = await Customer.find({ $and: conditions });
    res.json({ audience, size: audience.length });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
