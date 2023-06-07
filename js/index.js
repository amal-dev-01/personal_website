function sendMail()
{
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }

const serviceID="service_z0d2rwe";
const templateID="template_utxyj6w";
emailjs.send("service_z0d2rwe","template_utxyj6w",params).then(
    function(res) {
       document.getElementById("name").value="";
       document.getElementById("email").value="";
       document.getElementById("message").value="";
       console.log(res);
       alert("your message send successfully")
   })

   .catch(err =>console.log(err))
}