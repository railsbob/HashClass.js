# HashClass.js

A Hash with observable attributes, to be used with server side mootools and node.js.

## Usage ##

node example.js

    require("../lib/mootools-serverside").apply(GLOBAL);
    require("../lib/HashClass").apply(GLOBAL);

    var Person = new HashClass();
    var person = new Person({ name: 'anup', title: 'HashClass' });

    // Observe change on any attribute
    Person.onChange(function(instance){
      console.log('something changed');
    });

    person.set('title', 'HashClass.js') // something changed

    // Observe a particular attribute
    Person.onChange('name', function(instance){
      console.log('name changed');
    });

    person.set('name', 'Anup'); // name changed


## About ##
Copyright (c) 2010 Anup Narkhede

