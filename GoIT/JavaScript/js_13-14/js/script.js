$(function() {
	'use strict';
	var test = $('#primary').html();	

	 var questions = {
	 	item1: {
		        'question': 'Что такое БЭМ?',
		        'answers': [
		           'a. Блочно-элементная методология',
		           'b. Большая элементарная методология',
		           'c. Браузер-элемент-модификатор',
		           'd. Блок-элемент-модификатор'
		        ],
		        'key': 2
		    },
		item2: {
			    'question': 'В чем основной недостаток использования CSS фреймворков?',
		        'answers': [
		           'a. Именование классов фрейморков противоречит БЭМ',
		           'b. Они затрудняют индивидуальную настройку элементов страницы',
		           'c. Использование множества классов замедляют работу браузера',
		           'd. Затрудняют тестирование веб приложения'		
		        ],
		        'key': 1
		    },
		item3: {
			    'question': 'Почему в браузере не отображается текст, расположенный между тегами <!-- и -->?',
		        'answers': [
		           'a. Потому что таких тегов не существует и браузер их игнорирует.',
		           'b. Это комментарий к коду, поэтому он не выводится.',
		           'c. Это команды для поисковых систем, а не для браузеров.',
		           'd. Такой текст воспринимается браузером как стилевые параметры для оформления элементов веб-страницы.'	
		        ],
		        'key': 1
		    },
		item4: {
			    'question': 'Какое свойство CSS существовало в более ранних спецификациях чем CSS3?',
		        'answers': [
		           'a. background-image',
		           'b. background-size',
		           'c. border-image',
		           'd. opacity'
		        ],
		        'key': 1
		    }
		}

	var data = {
		titleTest: 'Пробный тест по HTML',
		condition: 'Выберите один ответ:',
        questions,
        btnSaveText: 'Проверить мои результаты',
        modalWindow: 'Модальное окно',
        btnCloseText: 'Закрыть'
	};

	localStorage.setItem('test', JSON.stringify(data));
	var testLocal = localStorage.getItem('test')
	localStorage.clear();

	var content = tmpl(test, JSON.parse(testLocal));
	$('body').append(content);


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
		//result();
		getValues();

	   // $('.modalWindow').fadeIn('slow');
    });
    $('.btnClose').click(function(){
    	$('.modalWindow').fadeOut('slow');
    });


// 

    function result(){
    	
  //   	var checked = [];
		// $(':checkbox:checked').each(function () {
  //   		checked.push($(this).val());
    	
		// });   

  //   	for(var index in data.questions)
  //   	{
  //   		var keyAnswer = data.questions[index].key;    	
  //   		console.log("key",keyAnswer);   
  //   		questions[index].answers.forEach(function(answer) {
  //           console.log("answer", answer);
  //           });		    		
  //   	}
    }

    function getValues() {

    }
});
