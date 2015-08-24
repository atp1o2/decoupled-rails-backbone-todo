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
var ModelView = Backbone.View.extend({
  // tagName is a special method that works with template
  tagName: 'li',
  template: _.template("<%= content %>"),
  initialize: function(passedModel){
    return this.model = passedModel.model;
  },
  render: function(){
    //pass in object from initialize
    this.$el.html(this.template(this.model.attributes));
    return this; // this.$el === [<li>​First Task Ever​</li>​]
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

      var modelView = new ModelView({ model: models[i] });
      // modelView cid: "view8" is the end result
      // this is because two views are generated every time this loops
      // one for the modelView and one for the allView

      this.$el.append(modelView.render().el);
      // this.$el === [<div id='target'>​</div>​]
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

