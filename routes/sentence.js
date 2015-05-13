var express = require('express');
var router = express.Router();
var Sentence = require('../models/sentence');


router.get('/', function(req, res, next) {

	Sentence.find().exec(function(err, sentences) {
		console.log('err = ' + err);
		if(err) return next(err);

		res.render('sentence/index', {
			title: '문장 목록',
			sentences: sentences
		});
	});	
});

module.exports = router;
