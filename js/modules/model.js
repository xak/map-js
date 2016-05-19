var request = require('superagent');

var model = module.exports = {
  init: function() {
    model.getData();
  },
  currentDate: new Date,
  eventDate: new Date(2056,10.05),
  menuItem: {
    tile: null,
    count: null,
    id: null
  },
  
  menu: {},
  
  getData: function() {
    request.get('/api/menu.json',function(err,res) {
      model.menu = JSON.parse(res.text).menuItems;
    })
    
  }
}

var places = module.exports = {
  init: function() {
    model.getData();
  },
  
  places: {},
  
  getData: function() {
    request.get('/api/places.json',function(err,res) {
      model.places = JSON.parse(res.text).places;
    })
    
  }
}
