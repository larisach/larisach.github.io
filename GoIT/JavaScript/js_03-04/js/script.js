
var app = {
	createElement: 	function(params) {
		console.log('params', params);
		var element = document.createElement(params.tagName);
		if(params.tagName) {
			element.setAttribute('type', params.typeName) 
		}
		if(params.className) {
			element.className = params.className;		
		}
		if(params.styleName) {
			element.style.marginLeft = params.styleName;
		}
		if(params.content) {
			element.innerHTML = params.content;
		}
		if(params.styleForDiv) {
			element.style.width = params.styleForDiv;
		}
		if(params.styleForInput) {
			element.style.border = params.styleForInput;
		}
		if(params.parentElement) {
			params.parentElement.appendChild(element);
			element.value = params.valueText;
		}
		return element;
	}, 

	createQuestion: function (questionsAmount, answersAmount) {
		for (var i = 1; i <= questionsAmount; i++) {
			this.createElement({
				tagName: 'h3',
				content: i + '. Вопрос №' + i,				
				parentElement: form
			});
		for (var j = 1; j <= answersAmount; j++) {
			var lblAnswers = this.createElement({
				tagName: 'p',	
				styleName: '35px',				
				content: 'Вариант ответа №' + j,
				parentElement: form
			});
			var checkboxForLabel = this.createElement({
				tagName: 'input',					
				typeName: 'checkbox'				
			});

			lblAnswers.insertAdjacentElement('afterBegin', checkboxForLabel);			
		}
	};
  }
}


var body = document.querySelector('body');
var divNew = app.createElement({
	tagName: 'div',   
    styleForDiv: '600px',
    styleName: '200px',
	parentElement: body
});
app.createElement({
	tagName: 'h2',
	className: 'text-center',
	content: 'Тест по программированию',
	parentElement: divNew
});
var form = app.createElement({
	tagName: 'form',
	parentElement: divNew
});
app.createQuestion(3, 3);
app.createElement({
	tagName: 'input',
	typeName: 'submit',
	valueText: 'Проверить мои результаты',
	className: 'btn btn-default center-block ',
	styleForInput: '2px solid black',
	parentElement: form
});