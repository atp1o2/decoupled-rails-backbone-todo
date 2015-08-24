// ajax calls here

$(document).ready(function(){
  showTasks();

})


var showTasks = function(){
  $.ajax({
    url: "http://localhost:3000/tasks"
  }).done(function(response){
    console.log('success')
    console.log(response[0].content)

    $('#target').append(response[0].content)
  })
}
