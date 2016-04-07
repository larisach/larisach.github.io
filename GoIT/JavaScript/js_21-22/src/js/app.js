var app = {
	pow:function pow(x, y) {
		var b = x;
		for (var i = 1; i < y; i++) {
			b *= x;
		}
		return b;
	}
}


module.exports = app;