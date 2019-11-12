const router = require('express').Router();
const userApiRoutes = require('./userApiRoutes');

router.use('/user', userApiRoutes);

module.exports = router;