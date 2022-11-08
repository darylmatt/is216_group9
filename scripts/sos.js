var sos_button = document.getElementById("sos_button");
sos_button.addEventListener("click", sos_alert);

function sos_alert() {

    var date = new Date();
    console.log(date, typeof(date));
    alert("Your SOS message has been received and forwarded to")
}