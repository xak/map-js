var request = require('superagent');

var model = module.exports = {
  init: function() {
    model.getData();
  },
  place: {
    name: null,
    coords: null
  },
  places: [],
  getData: function() {
    request.get('/api/places.json',function(err,res) {
      var _places = JSON.parse(res.text).places;
      model.places = _places;
    });
  }
};
