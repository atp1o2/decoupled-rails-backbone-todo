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
    content: 'null',
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
  tagName: 'p',
  template: _.template("<%= content %>"),
  initialize: function(passedModel){
    // _.bindAll(this, "render")
    // console.log(opts.model)
    // whatever this model is should be passed to render()
    return this.model = passedModel.model;
  },
  render: function(){
    //pass in object from initialize
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
    // models = array of the model objects
    var models = this.collection.models;
    for(var i = 0; i < models.length; i++) {
      var taskView = new TaskView({ model: models[i] });
      //this is just appending the entire collection
      console.log(taskView)
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

