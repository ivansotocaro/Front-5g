let pass = document.querySelector('.pass');
let user = document.querySelector('.user');

function checkInput(input){
  if(input.value != ""){
      user.classList.add('effect');
  }else{
    user.classList.remove("effect");
  }
}

function checkInput2(input){
  if(input.value != ""){
    pass.classList.add("effect");
  }else{
    pass.classList.remove("effect");
  }
}