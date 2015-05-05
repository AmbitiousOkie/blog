var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res) {
  res.send("Here's a list of all the posts.");
})

router.get('/new', function(req, res) {
  res.send("Create a NEW post!");
})

router.post('/', function(req,res) {
	res.send("Create a new post!");
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  res.send("You requested the post with the ID: " + id);
})

router.get('/:id/edit', function(req, res) {
  var id = req.params.id;
  res.send("Editing post ID: " + id);
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  res.send("Updating post ID: " + id);
})

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  res.send("Delete post ID: " + id);
})
 

 //Comment Section

router.get('/:id/comments', function(req, res) {
  var id = req.params.id;
  res.send("Here are all the comments for post:  " + id);
})

router.get('/:id/comments/new', function(req, res) {
  var id = req.params.id;
  res.send("Create a new comment for post:  " + id);
})

router.post('/:id/comments', function(req, res) {
  var id = req.params.id;
  res.send("Created a new comment for post:  " + id);
})

router.get('/:id/comments/:cid', function(req, res) {
  var id = req.params.id;
  var cid = req.params.cid;
  res.send("Here is the comment ID :" + cid + " for post:  " + id);
})

router.get('/:id/comments/:cid/edit', function(req, res) {
  var id = req.params.id;
  var cid = req.params.cid;
  res.send("Edit the comment ID :" + cid + " for post:  " + id);
})

router.put('/:id/comments/:cid', function(req, res) {
  var id = req.params.id;
  var cid = req.params.cid;
  res.send("Update comment ID :" + cid + " for post:  " + id);
})

router.delete('/:id/comments/:cid', function(req, res) {
  var id = req.params.id;
  var cid = req.params.cid;
  res.send("Delete the comment ID :" + cid + " for post:  " + id);
})



module.exports = router;
