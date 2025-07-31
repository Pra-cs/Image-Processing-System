const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/imageController');

router.post('/submit', ctrl.submitUrls);
router.get('/status', ctrl.getStatus);
router.get('/results', ctrl.getResults);

module.exports = router;