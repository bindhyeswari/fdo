var express = require('express');
var fdo = require('../fdo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // todo: write the cache - the index.html is cached for 10 years
  res.set({
      'Content-Type': 'text/html'
  });
    res.set({
        'X-EdwinsSecurity-ID': '12528'
    });
  res.render('index', { title: 'Express' });
});


router.get('/info', fdo.edwin, function(req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

function setEdwinsSecurity(req, res, next) {
    res.set({
        'X-EdwinsSecurity-ID': '12528'
    });
    next();
}

module.exports = router;
