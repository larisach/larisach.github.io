// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;'use strict';
$(function() {
	
	var test = $('#primary').html();	

	 var questions = [
	 	 {
		        'question': 'Что такое БЭМ?',
		        'answers': [
		           'a. Блочно-элементная методология',
		           'b. Большая элементарная методология',
		           'c. Браузер-элемент-модификатор',
		           'd. Блок-элемент-модификатор'
		        ],
		        'key': 3
		    },
		 {
			    'question': 'В чем основной недостаток использования CSS фреймворков?',
		        'answers': [
		           'a. Именование классов фрейморков противоречит БЭМ',
		           'b. Они затрудняют индивидуальную настройку элементов страницы',
		           'c. Использование множества классов замедляют работу браузера',
		           'd. Затрудняют тестирование веб приложения'		
		        ],
		        'key': 1
		    },
		 {
			    'question': 'Почему в браузере не отображается текст, расположенный между тегами <!-- и -->?',
		        'answers': [
		           'a. Потому что таких тегов не существует и браузер их игнорирует.',
		           'b. Это комментарий к коду, поэтому он не выводится.',
		           'c. Это команды для поисковых систем, а не для браузеров.',
		           'd. Такой текст воспринимается браузером как стилевые параметры для оформления элементов веб-страницы.'	
		        ],
		        'key': 1
		    },
		 {
			    'question': 'Какое свойство CSS существовало в более ранних спецификациях чем CSS3?',
		        'answers': [
		           'a. background-image',
		           'b. background-size',
		           'c. border-image',
		           'd. opacity'
		        ],
		        'key': 1
		    }
		]

	var data = {
		titleTest: 'Пробный тест по HTML',
		condition: 'Выберите один ответ:',
        questions: questions,
        btnSaveText: 'Проверить мои результаты',
        modalWindow: '',
        btnCloseText: 'Закрыть'
	};

	localStorage.setItem('test', JSON.stringify(data));
	var testLocal = localStorage.getItem('test')
	localStorage.clear();

	var content = tmpl(test, JSON.parse(testLocal));
	$('body').append(content);

	var rightAnswer = [];
	
	for (var i = 0; i < questions.length; i++) {

		rightAnswer.push(questions[i].key);	
	};
	console.log("rightAnswer", rightAnswer); 


// select one checkbox
	$('input:checkbox').change(function(){

		var state = $('input[name="' + $(this).attr('name') +'"]').is(':checked');
		$('input[name="' + $(this).attr('name') +'"]').removeAttr('checked');	
		 if(state==true) { 		 
		 	$(this).prop('checked', true);
		 }else{		
		 	$(this).prop('checked', false);
		 }			
	});



	$('.btnSave').click(function(){		
		getValues();
			
    });
    
    $('.btnClose').click(function(){    	
    	$('.modalWrapper').fadeOut('slow');
    	 $('input:checkbox').removeAttr('checked');
    });

    function getValues() {    	
    	var inputCheckbox = [];    	
    	var checkboxes = $('input[type=checkbox]:checked');
    	for (var i=0; i < checkboxes.length; i++){
    		inputCheckbox.push(checkboxes.eq(i).val());    	
    	}    	
    	 console.log(inputCheckbox.toString() + "=" + rightAnswer.toString());  

    	  $('html, body').animate({
         	scrollTop: 0
         }, 'slow');

        $('.modalWrapper').fadeIn('slow');
    	if (inputCheckbox.toString() == rightAnswer.toString()) {
    		$('.modalWindow').html('Answer correct!');
    		
    	} else {
    		$('.modalWindow').html('Incorrect!');
    		
    	};        
    };
});
