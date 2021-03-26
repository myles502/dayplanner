$('#save');
localStorage.content = $('#save').html();
$('#save').html(localStorage.content);

$('.col-md-10 description')
localStorage.content = $('.col-md-10 description').html();
$('.col-md-10 description').html(localStorage.content);


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));