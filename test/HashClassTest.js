/*
  Usage: node HashClassTest.js
*/

require("../lib/mootools-serverside").apply(GLOBAL);
require("../lib/HashClass").apply(GLOBAL);

var assert = require("assert");

var Person = new HashClass();

var person = new Person({ name: 'anup', title: 'HashClass' });

var attrChanged  = false;
var nameChanged  = false;
var titleChanged = false;
var name  = '';
var title = '';

Person.onChange(function(instance){
  attrChanged = true;
});
person.set('name', 'Anup');
assert.ok(attrChanged, 'Attribute Changes');

Person.onChange('name', function(instance){
  nameChanged = true;
  name = instance.get('name');
});

person.set('name', 'railsbob');
assert.ok(nameChanged);
assert.equal(name, 'railsbob');

Person.onChange('title', function(instance){
  titleChanged = false;
  title = instance.get('title');
});

person.set('title', 'HashClass');
assert.ok(!titleChanged);
assert.equal(title, 'HashClass');
