$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("#errorMess").text("Ввидите email");
        return false;
    } else if(name == "") {
        $("#errorMess").text("Ввидите имя");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Ввидите телефон");
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("Ввидите сообщение не мение 5 символов");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name, 'phone':phone, 'message': message},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Были ошибки, сообщение не отправлено!")
            else 
                $("#mailForm").trigger("reset");  
                
            $("#sendMail").prop("disabled", false);
        }
    });

}); 