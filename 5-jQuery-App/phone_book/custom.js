$(document).ready(function () {

    $(".send_btn").click(function () {

        let data = {
            full_name : $("#full_name").val(),
            email : $("#email").val(),
            phone : $("#phone").val()
        };

        $.post("http://localhost/JavaScriptApp/5-jQuery-App/phone_book/api.php", data, function(response){
            if(response == "1"){
                alert("It has been successfully saved.");
                console.log("done");
                $(".refresh_btn").click();
            }else{
                console.log("error");
            }
        });
    });

    $(".refresh_btn").click(function () {
        $.get("http://localhost/JavaScriptApp/5-jQuery-App/phone_book/list.php",{},function (response) {

            jsonData = JSON.parse(response);

            $(".list").html('');

            $(jsonData).each(function (index, item) {

                // console.log(item);

                let line = item.full_name + " [" + item.email + "] " + "[" + item.phone + "]";

                $(".list").append("<li>" + line + "</li>");
            });
        });
    });
});