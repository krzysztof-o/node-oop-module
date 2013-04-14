node-oop-module
===============
Node.js library to transform modules into classes.
##Instalation
```
npm install oop-module
```
##Usage
###Class definition
You can define classes just like you are define modules.

```javascript
//Person.js

var firstName;
var lastName;

exports.constructor = function(_firstName, _lastName) {
	firstName = _firstName;
	lastName = _lastName
}
exports.introduce = function() {
	return 'My name is ' + firstName + ' ' + lastName;
}
```

```javascript
var oop = require('module-oop');
var Person = oop.class('./Person.js');

var spiderman = new Person('Peter', 'Parker');
var batman = new Person('Bruce', 'Wayne');

assert.notEqual(spiderman, batman);

spiderman.introduce(); //'My name is Peter Parker';
batman.introduce(); //'My name is Bruce Wayne';
```
###Inheritance
Constructor is inherited from class Person. Method introduce is overridden.

```javascript
//Rapper.js

var oop = require('module-oop');
var _super = oop.extends('./Person.js');

exports.introduce = function() {
	return "YO! " + _super.introduce();
}
```

```javascript
var oop = require('module-oop');
var Rapper = oop.class('./Rapper.js');

var snoopDogg = new Rapper('Snoop', 'Dogg');
snoopDogg.introduce(); //'YO! My name is Snoop Dogg';
```

##Test
```
make test
```
