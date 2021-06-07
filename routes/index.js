var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:password@localhost:5432/dvdrental')

/* GET home page. */
router.get('/', async function(req, res, next) {
  let dbOutput = {};
  try {
    let data = await db.one('SELECT phone, address FROM address LIMIT 1');
    console.log('DATA:', data)
    dbOutput.selectOne = JSON.stringify(data);
  } catch(error) {
    console.log('ERROR:', error)
  }
  console.log(dbOutput);
  res.render('index', { dbOut: dbOutput });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/test', function(req, res, next) {
  res.send('testmsg');
});

module.exports = router;
