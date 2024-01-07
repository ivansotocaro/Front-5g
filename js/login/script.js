let pass = document.querySelector('.pass');
let user = document.querySelector('.user');
let passInput = document.querySelector(".passInput");
let userInput = document.querySelector('.userInput');
let buttonGo = document.querySelector('#go');

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

$(document).on("click", "#go", function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/login",
    data: {
      password: passInput.value,
      email: userInput.value,
    },
    type: "POST",
    statusCode: {
      404: function () {
        alert.error("La Ruta de la pagina no es la correcta");
      },
    },
  })
    .done(function (data) {
      if (data.status == "success") {
        alert("¡Ingreso exitosamente!");
        localStorage.setItem("token", data.authorisation.token); 
        window.location.href = "page/dashboard.html";
      } 
      
      if (data.status == "error") {
        alert("usuario o contraseña incorrecta");
      }
    })
    .fail(function () {
      alert("Debe llenar todos los campos");
    });
});

