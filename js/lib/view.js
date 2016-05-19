var helper = require('./helper.js');
var model = require('./model.js');

var view = module.exports = {
  init: function() {
    //build html
    view.buildHtml();
  
//    view.showCountdown();
//    view.registerClick();
  },
  registerClick: function() {
    var id;
    var listItem = document.querySelectorAll('#menu li');
    
    for(var i=0;i< listItem.length; i++) {
      view.addListener(listItem[i]);
    }
  },
    
  addListener: function(listItem) {
      listItem.addEventListener('click',function() {   
        id = this.getAttribute('data-id');
        //set the current menu item
        helper.setCurrent(+id);
        //increment the count
        helper.increment();
        //update the menu item in the view
        view.updateCount();
      });
    
  },
  updateCount: function() {
    //get current menu item
    var item = helper.getCurrent();
    //find the li of the current menu item
    var li = document.querySelector('[data-id="' + item.id + '"]');
    var count = li.querySelector('.count__');
    //update the count in the view
    count.innerHTML = item.count;
  },
  buildHtml: function() {
    var map = document.getElementById('map');
    helper.setCurrent(0);
    map.innerHTML = helper.getCurrent(0);

  }
  
};
