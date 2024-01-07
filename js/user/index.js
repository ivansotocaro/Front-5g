$(document).ready(function() {
  listTable()
})
let table = document.getElementById("tableBody");

function listTable(){

  $.ajax({
    url: "http://127.0.0.1:8000/api/user",
    method: "get",
    dataType: "json",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    beforeSend: function () {
      console.log("load");
    },
    success: function (res) {
      let users = res.user;
      users.forEach(function (user) {
        let body = document.createElement("tr");
        body.innerHTML = `<td>${user.name}</td>
        <td>${user.document}</td>
        <td>${user.email}</td>
        <td>${user.is_admin ? 'Admin': 'Normal'}</td>`;
        table.appendChild(body);
      });
    },
    error: function () {
      alert("No authorizado");
    },
  });

}


function limpiarTable(){
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
};