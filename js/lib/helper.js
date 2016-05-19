var model = require('./model.js');

var helper = module.exports = {

  setCurrent: function(index) {
  console.log(index);
    for(var i=0;i< model.places.length; i++) {
      if (i === index) {
        model.place = model.places[i];
      }
    }
  },
  getCurrent: function() {
    return model.place.name;
  }
  
};
