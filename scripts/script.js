// var element = document.getElementById("tel");
// var maskOptions = {
//   mask: "+{7}(000)000-00-00",
//   lazy: false,
// };
// var mask = IMask(element, maskOptions);

// let reg = /[А-ЯЁ][а-яё]/;
// let regEmail =
//   /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;


let form = document.querySelector('.form__in');
let formInputs = document.querySelectorAll('.form__in-input')
let surname = document.querySelector('#surname');
let nameinput = document.querySelector('#name');
let pass = document.querySelector('#pass');
let span = document.querySelector('.span');
let tel = document.querySelector('#tel');



function validPass(passVal,pass){
  if (passVal.length <= 4){
    span.innerHTML = '*Пароль должен быть > 4 символов';
    pass.classList.add('error');
    return false
  } else {
    pass.classList.remove('error');
    span.innerHTML= '';

  }

}
 function validTel(telVal){
  let re = /^[0-9\s]*$/;
  return re.test(String(telVal));
 }


form.onsubmit = function(){
  let  passVal = pass.value,
      telVal = tel.value,
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
    validPass(passVal,pass);
    
   if (!validTel(telVal)){
     document.querySelector('#tel').classList.add('error');
     return false
   } else if(telVal.length < 11) {
    document.querySelector('#tel').classList.add('error');
       return false

   } else {
    document.querySelector('#tel').classList.remove('error')
   }
}
