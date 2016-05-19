var assert = require('assert');
var helper = require('../js/modules/helper.js');
var model = require('../js/modules/model.js');

model.place = {
  "name": "Vestibulum",
  "coords": { 
    "x": 189, 
    "y": 47 
  }
};

model.places = [
  {
    "name": "Vestibulum",
    "coords": { 
      "x": 189, 
      "y": 47 
    } 
  },
  {
    "title": "Suspendisse",
    "coords": { 
      "x": 249, 
      "y": 82 
    } 
  }  
];
// 
// describe('Helper Tests', function() {
//   describe('increment', function() {
//     it('should increment the menu item', function() {
//       helper.increment();
//       assert.equal(model.menuItem.count, 258);
//     })
//   });
//   
//   describe('set current', function() {
//     it('should set the current menu item', function () {
//       helper.setCurrent(2);
//       assert.equal(model.menuItem.id, 2);
//     })
//   });
//   
//   describe('get current', function() {
//     it('should return the current menu item', function () {
//       helper.setCurrent(1);
//       helper.getCurrent();
//       assert.equal(model.menuItem.id, 1);
//       helper.setCurrent(2);
//       helper.getCurrent();
//       assert.equal(model.menuItem.id, 2);
//     })
//   });
//   
// })