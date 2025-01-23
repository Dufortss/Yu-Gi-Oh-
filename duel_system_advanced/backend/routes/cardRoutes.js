
const express = require('express');
const { activateCard } = require('../utils/effects');

const router = express.Router();

router.post('/activate-card', activateCard);

module.exports = router;
    