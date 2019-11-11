const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const auth = require('./auth');

// API ROUTES
router.use('/api', apiRoutes);
router.use('/auth', auth);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;