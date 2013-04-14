var assert = require('assert');
var oop = require('..');

describe('class A', function() {
	before(function() {
		A = oop.class('./A');
	});
	after(function() {
		A = null;
	});

	it('should not be null', function(){
		assert.notEqual(A, null);
	});
});

describe('instance of class A', function() {
	before(function() {
		A = oop.class('./A');
		a = new A();
	});
	after(function() {
		A = null;
		a = null;
	});

	it('should be not null', function() {
		assert.notEqual(a, null);
	});
	//it('should be instanceof', function(){
		//assert.ok(animal instanceof Animal);
	//});
	it('should be able to have access to methods', function(){
		assert.notEqual(a.methodA, null);
		assert.notEqual(a.methodB, null);
	});
	it('should be able to have access to methods inherited from class B', function(){
		assert.notEqual(a.methodC, null);
	});
	it('should be able to call overriden method', function(){
		assert.equal(a.methodA(), 'A::methodA B::methodA');
	});
	it('should be able to call method', function(){
		assert.equal(a.methodB(), 'A::methodB');
	});
	it('should be able to call inherited method', function(){
		assert.equal(a.methodC(), 'B::methodC');
	});
});

describe('instances of class A', function() {
	before(function() {
		A = oop.class('./A');
		a1 = new A();
		a2 = new A();
	});
	after(function() {
		A = null;
		a1 = null;
		a2 = null;
	});

	it('should not be equal', function() {
		assert.notEqual(a1, a2);
	});
});



