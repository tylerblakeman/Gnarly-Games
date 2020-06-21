module.exports = function(pass1, pass2) {
	if (pass1 === pass2) {
		bcrypt.hash(x, 10, function(err, hash) {
			if (err) {
				throw err;
			} else {
				return success();
			}
		});
	}
};
