console.log('oh hey!');

var model = {
  init: function() {
    console.log('model');
  }
};

var helper = {
  
  
};

var view = {
  init: function() {
    console.log('view');
  }
  
};

var app = {
  init: function() {
    console.log('app');
    model.init();
    view.init();
  }
  
};

app.init();


