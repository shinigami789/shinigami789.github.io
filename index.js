//require('dotenv').config()

function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_45odg1w";
  const templateID = "template_r3hk75s";

    emailjs.send(serviceID, templateID, params, "lT37chRp-fah1SDc-")
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Ваше сообщение было успешно отправлено.")

    })
    .alert("Error");
}