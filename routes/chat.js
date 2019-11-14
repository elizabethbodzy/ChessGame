const express = require('express');
const router = require('express').Router();



// SIGN IN ROUTE
router.get('/', (req, res) => {
    res.send('server is up and running');
})
        
       


module.exports = router;