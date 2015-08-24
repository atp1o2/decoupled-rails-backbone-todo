  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  }


//-------------------------------
// MODEL
//-------------------------------
App.Models.Task = Backbone.Model.extend({
  defaults: {
    content: '',
    completed: false
  }
});



//-------------------------------
// COLLECTION
//-------------------------------
App.Collections.Tasks = Backbone.Collection.extend({
  url: 'http://localhost:3000/tasks',
  model: App.Models.Task
})


//-------------------------------
// VIEW
//-------------------------------

// singular item
App.Views.TaskView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<%= content %>"),

  initialize: function(opts){
    return this.listView = opts.listView;
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})


// all items
App.Views.AllView = Backbone.View.extend({
  el: '#target',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    var col = this.collection.models;

    for(var i = 0; i <= col.length; i++) {
      var model = col[i];

      var itemView = new App.Views.TaskView({ model: model });

      this.$el.append(itemView.render().el);
    }
  }
})


//-------------------------------
// Instances
//-------------------------------
$(document).ready(function() {
  App.tasks = new App.Collections.Tasks;
  App.allView = new App.Views.AllView({
    // sets view.collection equalTo= tasks.collection
    collection: App.tasks
  });
  return App.tasks.fetch();
});




// var AppView = Backbone.View.extend({
//   el: $("#target"),
//   // _.template(templateString, [data], [settings])
//   // templateString is where you can insert data
//   // can use <%=  %> to insert js code
//   template: _.template('<h3>Hello, <%= who %></h3>'),

//   initialize: function(){
//     this.render();
//   },

//   render: function(){
//     $(this.el).html(this.template({who: 'Andrew'}));
//   }
// })




//-------------------------------
// ROUTES
//-------------------------------









  // use ajax to call on the json data
  // front end should be talking to the server and pull the data
  // cross domain access allow in models
