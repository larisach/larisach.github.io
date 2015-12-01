var arrName = [];

  for (var i = 0; i < 5; i++) {
  arrName[i] = prompt('Введите имя пользователя', '');
}

var nameUser = prompt('Введите свое имя', '');

if ( contains(arrName, nameUser) ) {
	alert(nameUser + ", вы успешно вошли");
} else {
  alert("Ошибка, такого имени в списке нет! Попробуйте еще раз");
}

function contains(arr, name) {
  for (var i = 0; i < arr.length; i++) {
    if(name == arr[i])	{
	  return true;		
    }
  }
  return false;
}