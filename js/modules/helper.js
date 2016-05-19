var countdown = require('countdown');
var model = require('./model.js');

var helper = module.exports = {
  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
    
  },
  setCurrent: function(id) {
    console.log('length');
  console.log(model.menu);
    for(var i=0;i< model.menu.length; i++) {
      if (model.menu[i].id === id) {
        model.menuItem = model.menu[i];
      }
    }
  },
  increment: function() {
    model.menuItem.count++;
  },
  getCurrent: function() {
    return model.menuItem;
    
  },
  getLength: function() {
  console.log('length');
  console.log(model.menu.length);
    return model.menu.length;
    
  }
  
  
}
