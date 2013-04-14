var Module = require('module');
delete require.cache[module.id];

exports.class = function(path) {
	return function() {
		var _module = getUniqueModule(path);

		//call constructor
		if (_module.hasOwnProperty('constructor')) {
			_module.constructor.apply(null, argumentsToArray(arguments));
		}
		return _module;
	};
}

exports.extends = function(path) {
	var baseClassObject = module.parent.exports;
	var _module = getUniqueModule(path);

	for (var property in _module) {
		if (!baseClassObject.hasOwnProperty(property)) {
			baseClassObject[property] = _module[property];
		}
	}
	return _module;
}

function getUniqueModule(path) {
	var parent = module.parent;
	var filename = Module._resolveFilename(path, parent);

	delete Module._cache[filename];
	return Module._load(filename, parent);
}

function argumentsToArray(arg) {
	var i = 0;
	var arr = [];
	while(arg.hasOwnProperty(i)) {
		arr.push(arg[i]);
		i++;
	}
	return arr;
}

