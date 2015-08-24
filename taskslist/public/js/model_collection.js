

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





