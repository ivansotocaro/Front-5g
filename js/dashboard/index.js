let buttonUser = document.querySelector('#userPage');
let buttonPayment = document.querySelector('#paymentPage');
let buttonPaymentImport = document.querySelector("#paymentImportPage");

buttonUser.addEventListener('click', function() {
  window.location.href = "user.html";
});

buttonPayment.addEventListener('click', function() {
  window.location.href = "payment.html";
});

  buttonPaymentImport.addEventListener("click", function () {
    window.location.href = "paymentImport.html";
  });