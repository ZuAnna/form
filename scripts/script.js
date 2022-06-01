var element = document.getElementById('tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
};
var mask = IMask(element, maskOptions);

let reg = /[А-ЯЁ][а-яё]/;
let regEmail = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

let surname = document.querySelector('#surname');
let name = document.querySelector('#name');
let  pass = document.querySelector('#pass');
let span = document.querySelector(".span");

document.querySelector('.signin').onclick = function(e){
  e.preventDefault();
  if (!regexp.test(surname.value)){

  }
};
