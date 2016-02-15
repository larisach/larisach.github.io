// Homework 15
$(function() {
  $('#googleSearch').submit(function() {

    var query = $('#searchQuestion').val();          
    var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&q='+ query + '&callback=GoogleCallback&context=?';
           
    $.ajax({
      url: url,
      dataType : "jsonp",
      success: function (data, textStatus) {
      	var $divResults = $('.resultsSearch').empty();
      		$divResults = $('.resultsSearch').append('<ul class="wrapperSearch"></ul>');
      			$.each(data.results, function(i, value) {
      				var $divLink = $('.wrapperSearch').append('<li class="linkWrapper"></li>');
      				$('.linkWrapper').last().html('<a href="'+value.url+'" title="'+value.url+'" target="_blank" class="linkTitle">'+value.title+'</a>' +
                        '<p class="linkSearch">'+ value.url + '</p>'+
                        '<p class="valueSearch">'+ value.content + '</p>'+
                        '<br>');
      			});
      		}
    });
    return false;
  });
});

function GoogleCallback (func, data) {
    window[func](data);
};

// Homework 16
function Human() {
	this.name='Vasya';	
	this.age= 18;
	this.sex='men';
	this.height=180;
	this.weight=85;
}
var newHuman = new Human();
console.log("Human", newHuman);


function Worker(){
	this.placeWork='Google';
	this.salary=10000;
	this.toWork = function(){
		return 'working';
	}
}
Worker.prototype = newHuman;
var newWorker = new Worker();


function Student(){
	this.placeStudy='KNTU';
	this.grants=300;
	this.watchShows = function(){
		return 'study';
	}
}
Student.prototype = newHuman;
var newStudent = new Student();


console.log("Student", newStudent);
console.log("Student.name - ", newStudent.name,
	        "\nStudent.age - ", newStudent.age,
	        "\nStudent.sex - ", newStudent.sex,
	        "\nStudent.height - ", newStudent.height,
	        "\nStudent.weight - ", newStudent.weight,
	        "\nStudent.placeStudy - ", newStudent.placeStudy,
	        "\nStudent.grants - ", newStudent.grants);

console.log(newStudent.name, newStudent.watchShows());


console.log("Worker", newWorker);
console.log("Worker.name - ", newWorker.name,
	        "\nWorker.age - ", newWorker.age,
	        "\nWorker.sex - ", newWorker.sex,
	        "\nWorker.height - ", newWorker.height,
	        "\nWorker.weight - ", newWorker.weight,
	        "\nWorker.placeWork - ", newWorker.placeWork,
	        "\nWorker.salary - ", newWorker.salary);

console.log(newWorker.name, newWorker.toWork());
