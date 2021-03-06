var helper = require('./helper.js');
var model = require('./model.js');

var view = module.exports = {
  init: function() {
    view.showCountdown();
    view.registerClick();
    view.buildHtml();
  },
  registerClick: function() {
    var id;
    var listitem = document.querySelectorAll('#menu li');
    
    for(var i=0;i< listitem.length; i++) {
      listitem[i].addEventListener('click',function() {   
        id = this.getAttribute('data-id');
        //set the current menu item
        helper.setCurrent(+id);
        //increment the count
        helper.increment();
        //update the menu item in the view
        view.updateCount();
      })
      
    }
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
  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector('#years').innerHTML = diff.years;
    document.querySelector('#months').innerHTML = diff.months;
    document.querySelector('#days').innerHTML = diff.days;
  },
  buildHtml: function() {
    var test = document.getElementById('test');
    test.addEventListener('click',function() {   
   // helper.setLength()
      this.innerHTML = helper.getLength();
    })


  }
  
}
