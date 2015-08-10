var express = require('express');
var router = express.Router();
var User = require('./models/user-model');
module.exports = router;


router.use('/users');
//Get all users

router.get('/', function (req, res){
	User.find({}).exec()
	.then(function(users){
		res.json(users);
	},function(){
		res.sendStatus(404);
	});
});

//update a user
router.put('/:id', function(req, res){
	User.findById({_id: req.params.id}).exec()
	.then(function(user){
		res.json(user);
	},function(){
		res.sendStatus(404);
	});
})

router.get()