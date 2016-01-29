$(function() {
	var card = $('#primary').html();
	
	var data = {
		name: 'Чернявая Лариса Александровна',
		foto: 'img/foto.png',
		activity: 'Студент GoIT',
		favor: 'Хочу учить фронтенд, потому что: ',
		listingFavor: [
		'Это интересная и творческая работа',
		'Возможность работать удаленно',
		'Хорошая оплата труда'],
		contact: 'Мой контактный телефон',
		contactТumber: '+380970768991',
		profile: 'Мой профиль в контакте',
		link: 'https://vk.com/id32768072',
		nameProfile: 'vk.com',
		feedback: 'Мой Feedback:',
		feedbackText: 'Жизнь удалась!!!'
	};
	var content = tmpl(card, data);
	$('body').append(content);

});