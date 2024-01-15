$(document).ready(function () {
  listaTablePreview();
});

let saveImportFile = document.querySelector("#saveImportFile"); 

saveImportFile.addEventListener("click", function(){
  let json = localStorage.getItem("preview");

  $.ajax({
    url: "http://127.0.0.1:8000/api/savepayment",
    data: {
      data: json,
    },
    type: "POST",
    statusCode: {
      404: function () {
        alert.error("La Ruta de la pagina no es la correcta");
      },
    },
  })
    .done(function (data) {
      console.log(data);
      alert("¡Ingreso exitosamente!");
      if (data.status == "success") {
      }

      if (data.status == "error") {
        alert("Error al guardar");
      }
    })
    .fail(function () {
      alert("Algo salio mal");
    });
  
})

function listaTablePreview() {
  let payments = getDataLocalStorage();
    payments.forEach(function (payment) {
      let body = document.createElement("tr");
      body.innerHTML = `<td>${payment.documento}</td>
    <td>${payment.nombre}</td>
    <td>${payment.correo}</td>
    <td>${payment.monto}</td>
    <td>${payment["fecha pago"]}</td>
    <td>${payment["fecha limite"]}</td>
    `;
      document.querySelector("#tablePreview").appendChild(body);
    });
}

function getDataLocalStorage() {
  return JSON.parse(localStorage.getItem("preview"));
}



function deleteDataToLocalStorage(){
  localStorage.removeItem("preview");
}


// [
//   {
//     documento: 12345678,
//     nombre: "admin",
//     correo: "admin@gmail.com",
//     monto: 50000,
//     "fecha pago": 45300,
//     "fecha limite": 45302,
//   },
// ];