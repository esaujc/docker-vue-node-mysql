const express = require('express');
const router = express.Router();
const {users} = require('../seeds/data')


/* GET home page. */
router.get('/', function(req, res, next) {  
  res.status(200).json({message: 'static data', data: users})
});

module.exports = router;
