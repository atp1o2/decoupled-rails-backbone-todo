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
var TaskView = Backbone.View.extend({
  // tagName is a special method that works with template
  tagName: 'li',
  template: _.template("<%= content %>"),
  initialize: function(opts){
    return this.itemView = opts.itemView;
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
      var taskView = new TaskView({ model: model });
      this.$el.append(taskView.render().el);
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

