$(document).ready(function () {
        $('#callbacks').on('submit', function (e) {
                e.preventDefault();
                $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: $("#callbacks").serialize(),
                        error: function () {
                                setTimeout(() => {
                                        $("#erconts").html("Произошла ошибка!");
                                }, 1000);
                        },
                        beforeSend: function () {
                                $("#erconts").html("Отправляем данные...");
                        },
                        success: function (result) {
                                document.querySelector('.submit-btn').classList.add("submitted")
                                setTimeout(() => {
                                        $("#erconts").html(result);
                                }, 1000);
                        }
                });
                return false;
        });
});
