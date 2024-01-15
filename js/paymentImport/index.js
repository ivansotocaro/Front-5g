let fileImportInput = document.querySelector("#fileImport");
let earringsBtn = document.querySelector("#earringsBtn");
let span = document.querySelector("#text-span");


fileImportInput.addEventListener('change', function(){
    span.textContent = fileImportInput.files[0].name;
})

let selectedFile;

  fileImportInput.addEventListener("change", function (event) {
    selectedFile = event.target.files[0];
  });

  earringsBtn.addEventListener("click", function () {
    
    let formData = new FormData();
    formData.append("filecsv", fileImportInput.files[0]);

    $.ajax({
      url: "http://127.0.0.1:8000/api/savepayment",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      statusCode: {
        404: function () {
          alert("La Ruta de la pagina no es la correcta");
        },
      },
    })
      .done(function (data) {
        console.log("SUSSES  " + JSON.stringify(data));
        // alert("¡Ingreso exitosamente!");
        // if (data.status == "success") {
        // }

        // if (data.status == "error") {
        //   alert("Error al guardar");
        // }
      })
      .fail(function () {
        alert("Algo salio mal");
      });

  })


  // earringsBtn.addEventListener("click", function () {

  //   if (selectedFile) {
  //     var fileReader = new FileReader();
  //     fileReader.onload = function (event) {
  //       var data = event.target.result;
        
  //       var workbook = XLSX.read(data, {
  //         type: "binary",
  //         cellDates: true,
  //       });

  //       workbook.SheetNames.forEach((sheet) => {
      
  //         let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
  //           header: 0,
  //           range: 0,
  //           defval: "",
  //         });
          
  //         saveLocalStorage(rowObject);
  //         // let jsonObject = JSON.stringify(rowObject);
  //       });
  //     };
  //     fileReader.readAsBinaryString(selectedFile);
  //     redirectPreview();
  //   }
  // });



  // function redirectPreview(){
  //   window.location.href = 'preview.html';
  // }

  // function saveLocalStorage(data){
  //   localStorage.setItem('preview', JSON.stringify(data) );
  // }