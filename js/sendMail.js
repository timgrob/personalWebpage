function sendMail() {
    var link = "mailto:tim.grob@swissonline.ch"
             + "&subject=" + escape("Message: Webpage Contact Form")
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}