function sendEmail() {
  var params = {
    BusID: document.getElementById("name").value,
    Route: document.getElementById("email").value,
    Reason: document.getElementById("message").value,
  };

  const serviceID = "";
  const templateID = "";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Ваше сообщение было успешно отправлено.")

    })
    .catch(err=>console.log(err));
}