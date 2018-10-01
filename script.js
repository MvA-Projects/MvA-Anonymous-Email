(function() {
    emailjs.init("user_zSQQmTG9vo0MCf2yH4xW4");
})();

function sendEmail() {
    let to = document.getElementById('email-to').value;
    let subject = document.getElementById('email-subject').value;
    let content = document.getElementById('email-content').value;

    if (to != "" && subject != "" && content != "") {
        let template_params = {
            "to": to,
            "subject": subject,
            "content": content
        }

        alert(emailjs.send("default_service", "mva_anonymous", template_params));
        location.reload();
    } else {
        alert("Please fill in all of the fields.");
    }
}