var element = document.getElementById("tel");
var maskOptions = {
  mask: "+{7}(000)000-00-00",
  lazy: false,
};
var mask = IMask(element, maskOptions);

// let reg = /[А-ЯЁ][а-яё]/;
// let regEmail =
//   /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;


let form = document.querySelector('.form__in');
let formInputs = document.querySelectorAll('.form__in-input')
let surname = document.querySelector("#surname");
let nameinput = document.querySelector("#name");
let pass = document.querySelector("#pass");
let span = document.querySelector(".span");


function validPass(pass, span){
  if (pass.length <= 4){
    span.innerHTML = 'Пароль слишком мал, введите больше 4 символов'
  }
}



form.onsubmit = function(){
  let surnameVal = surname.value,
      nameVal = nameinput.value,
      passVal = pass.value,
      emtyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function(input){
      if (input.value=== ""){
        input.classList.add('error');
        console.log('input not filled');
      } else {
        input.classList.remove('error')
      }
    });
    if (emtyInputs.length !==0){
      console.log('inputs not filled');
      return false;

    }

}
