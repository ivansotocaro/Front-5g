let names = document.getElementById("name");
let documents = document.getElementById("document");
let email = document.getElementById('email');
let buttonSave = document.getElementById("createUser");



buttonSave.addEventListener("click", function(){
  names.value, email.value, documents.value;

  $.ajax({
    url: "http://127.0.0.1:8000/api/register",
    type: "POST",
    dataType: "json",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: {
      name: names.value,
      email: email.value,
      document: documents.value,
    },
    statusCode: {
      404: function () {
        alert.error("La Ruta de la pagina no es la correcta");
      },
    },
  })
    .done(function (data) {
      if(data.status == "success"){
        document.querySelector('.modal').textContent = 'Guardado';
        setTimeout(() => {
          closeModal();
          limpiarTable();
          listTable()
        }, 1000);
        // listTable()
      }
    })
    .fail(function () {
      alert("error");
    });


})