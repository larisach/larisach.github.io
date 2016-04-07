 var app = require('../src/js/app.js');


describe("app", function() {
  it("exponentiation function", function() {
	// prepare
	var result;
	// act
	result = app.pow(1,3);
	// assert

    expect(result).toBe(1);
  });
});