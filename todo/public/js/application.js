(function($){
//-------------
// COLLECTION
//-------------
var TaskCollection = Backbone.Model.extend({
  url: '/tasks',
  model: TasksModel
})


//-------------
// MODEL
//-------------
var TaskModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});


//-------------
// VIEW
//-------------
var TaskView = Backbone.View.extend({
  el: $('#target'),




})




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





//-------------
// ROUTES
//-------------






//-------------
// Instances
//-------------

var appView = new AppView();
})(jQuery)
