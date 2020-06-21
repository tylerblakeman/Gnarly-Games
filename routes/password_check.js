var bcrypt = require("bcrypt");
module.exports = function() {
	bcrypt.compare(x, storedHash, function(err, result) {
		if (result == true) {
			return true;
		} else {
			return false;
		}
	});
};
