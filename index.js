module.exports = (function() {
  'use strict';

  // Declare dependencies
  // -------------------------------------------------------------
  var _ = require('lodash');


  // Begin module
  // -------------------------------------------------------------

  // Version 0.1.0

  // Create Store Objects
  function Store(name, items) {
    if (!name) {
      throw new Error('Please give the store a name!');
    }

    this.name = name;
    this.items = items || {};
    this.type = 'object';

    this.setType();
    return this;
  }


  // Methods for interacting with the Store
  Store.prototype = {
    setType: function() {
      this.type = _.isArray(this.items) ? 'array' : 'object';
    },

    add: function(thing) {
      if (this.type === "array") {
        this.items.push(thing);
      } else {
        this.items[thing.name] = thing;
      }

    },
    remove: function(thing) {
      _.pull(this.items, thing);
    },
    get: function(compname) {
      if (this.type === "array") {
        return _.filter(this.items, function(item) {
          return item === compname;
        });
      } else {
        return _.filter(this.items, function(item) {
          return item.name === compname;
        })[0];
      }
    },

    populate: function(thingsArray) {
      var self = this,
        args = _.isArray(thingsArray) ? thingsArray : Array.prototype.slice.call(arguments);

      _.each(args, function(thing) {
        if (!thing) {
          return;
        }
        self.add(thing);
      });

      return self;
    }
  };

  return Store;
}());
