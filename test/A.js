var oop = require('../index.js');
var _super = oop.extends('./B');

exports.constructor = function() {
	_super.constructor();
}

exports.methodA = function() {
	return "A::methodA " + _super.methodA();
}

exports.methodB = function() {
	return "A::methodB";
}

