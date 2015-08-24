  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  }

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
