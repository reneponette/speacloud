var env = {
	production: {
		env : 'production',
		db: {
			host      : 'mongodb://localhost/speacloud',
		}
	},
	development: {
		env : 'development',
		db: {
			host      : 'mongodb://localhost/relaynovel',
		}
	}
};

module.exports = (function() {
	var node_env = process.env.NODE_ENV || 'development';
	console.log('node_env = ' + node_env);
	return env[node_env];
})();