# Store Object

Creates a simple named store object which serves as a wrapper for an array or an object and provides utilities for adding and retrieving values.

The object store is intended to store objects. Objects are keyed to a name.
The array store is ideal for storing variables, string values or numerical values.


## Installation

    npm install store-object

## Usage

The store can be an array or an object. When the store is an array, any value can be stored in it. 

    var Store = require('store-object'),
    	store = new Store('myStore'); 
   
    // Object
	store = {
		name: 'myStore',
		items: {}
	};
	
	store.populate({
		name: 'thingOne',
		value: 0
	});
	store.add({
	    name:'thingTwo', value:1
	});
	// store.items = {thingOne: {name: 'thingOne', value: 0}, thingTwo: {name: 'thingTwo', value: 0}};
	
	store.get('thingOne');
	// {name: 'thingOne', value:1}
	
	store.remove('thingOne');
	// store.items = {thingTwo: {name: 'thingTwo', value: 1}}; 
	
	// Array
	store = {
		items: [thing, thingTwo]
	};
	
	store.get(thing);
	// [thing]
	
	store.add(anotherThing);
	
	
# Test

	npm install mocha -g
	mocha