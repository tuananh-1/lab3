var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home');
})

router.get('/football', (req, res) =>
 {let manu = "MU";
  let chelsea = "chelsea";
  let mancity = "MC";
  let arsenal = "ars";
  res.render('bongda', { manu: manu, chelsea: chelsea, arsenal:arsenal, mancity: mancity});
});

router.get('/interests', (req, res) => {
  var interest = ["money","music","game"];
  res.render('interest', { interest: interest});
})

module.exports = router;
