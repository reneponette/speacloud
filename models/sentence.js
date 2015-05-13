var mongoose = require('mongoose');

var schema = mongoose.Schema({

	language: String,
	text: String,
	pronounce: String,
	

  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Sentence', schema);