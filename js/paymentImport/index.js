let fileImportInput = document.querySelector("#fileImport");
let earringsBtn = document.querySelector("#earringsBtn");


let selectedFile;

  fileImportInput.addEventListener("change", function (event) {
    selectedFile = event.target.files[0];
  });

  earringsBtn.addEventListener("click", function () {

    if (selectedFile) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        var data = event.target.result;
        
        var workbook = XLSX.read(data, {
          type: "binary",
        });

        workbook.SheetNames.forEach((sheet) => {
      
          let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
            header: 0,
            range: 0,
            defval: "",
          });
          
          saveLocalStorage(rowObject);
          // let jsonObject = JSON.stringify(rowObject);
        });
      };
      fileReader.readAsBinaryString(selectedFile);
      redirectPreview();
    }
  });



  function redirectPreview(){
    window.location.href = 'preview.html';
  }

  function saveLocalStorage(data){
    localStorage.setItem('preview', JSON.stringify(data) );
  }