$(document).ready(function () {
  listaTablePreview();
});

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
