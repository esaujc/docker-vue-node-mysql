const express = require('express');
const router = express.Router();
const mysql = require('mysql');


const con = mysql.createConnection({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USER, 
  password: process.env.MYSQL_ROOT_PWD,
  // password: process.env.MYSQL_USER_PWD='insecurebydefault', 
  database: process.env.MYSQL_USER_DB 
});


/* GET users listing. */
router.get('/',  function(req, res, next) {
  //  con.connect(function (err) {
  //   if (err)
  //     throw res.status(400).json(err);
     con.query("SELECT * FROM employees", function (err, result, fields) {
      if (err)
        throw res.status(400).json(err);
      res.status(200).json({ status: 200, data: result });
    });
    // res.status(200).json('chusco')
  // });

});

router.get('/:id',  function(req, res, next) {
  const employeeId = req.params.id
     con.query(`SELECT * FROM employees WHERE employeeNumber = ${employeeId}`, function (err, result, fields) {
      if (err)
        throw res.status(400).json(err);
      res.status(200).json({ status: 200, data: result });
    });
});

router.post('/',  function(req, res, next) {
      con.query('INSERT INTO employees SET ?', req.body, function (err, result, fields) {
      if (err)
         res.status(400).json(err.sqlMessage);
      else 
        res.status(200).json({ status: 200, data: 'Employee inserted successfully' });
    });  
});

router.delete('/',  function(req, res, next) {
  const {employeeNumber} = req.body; 
     con.query(`DELETE FROM employees WHERE employeeNumber = ${employeeNumber};`, function (err, result, fields) {
      if (err)
        throw res.status(400).json(err. sqlMessage);
      
      res.status(200).json({ status: 200, data: 'Employee deleted successfully' });
    });
});

module.exports = router;
