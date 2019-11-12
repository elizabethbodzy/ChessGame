const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const auth = require('./auth');

// API ROUTES
router.use('/api', apiRoutes);
router.use('/auth', auth);

module.exports = router;