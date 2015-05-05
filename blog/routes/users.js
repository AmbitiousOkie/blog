var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource');
});

router.get('/news', function(req, res) {
  	res.send('You reached the News/Users page!');
});

router.get('/:id', function(req, res) {
	var id = req.params.id;
  	res.send('That user ID:' + id);
});


module.exports = router;
