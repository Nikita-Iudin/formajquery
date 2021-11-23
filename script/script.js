$(document).ready(function() {
        $("<div id='forma' class='form_container'><div class='form-container-two'><div class='title'><p class='title_text'>Оставить заявку</p><button class='viewform closeform' id='closeform'>x</button></div><div class='forma'><div class='subtitle'>Заполните эту форму если вы хотите оформить заказ или получить консультацию.</div><form name='MyForm' id='callbacks'><label for=''>Как вас зовут?</label><br><br><input name='name' type='text' placeholder='Введите ваше имя ' required /><br /><br /><label for=''>Введите ваш номер телефона *</label><br><br><input name='phone' type='tel' placeholder='(999) 999 99 99 *' required /><br /><br /><label for=''>Комментарий </label><br><br><textarea name='body' placeholder='Ваш комментарий или вопрос, не обязательно'></textarea><br /><br /><label><input type='checkbox' class='input_chekbox' checked='checked' required/></label> <a href='' class='pesonalized'>Согласие о персональных данных</a> <span>*</span> <br /><br /><div class='button_submit'><button id='submit' class='submit-btn'>Отправка</button></div></form><div id='erconts' style='display: block'></div></div></div></div></div></div>").appendTo("body");
        

$(document).ready(function() {
        $('#callbacks').on('submit', function(e) {
          e.preventDefault();
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $("#callbacks").serialize(),
            error: function() {
              setTimeout(() => {
                $("#erconts").html("Произошла ошибка!");
              }, 1000);
            },
            beforeSend: function() {
              $("#erconts").html("Отправляем данные...");
            },
            success: function(result) {
              document.querySelector('.submit-btn').classList.add("submitted")
              setTimeout(() => {
                $("#erconts").html(result);
              }, 1000);
            }
          });
          return false;
        });
      });
      
      
              const toggleForm = document.querySelectorAll(".viewform");
            const form = document.querySelector("#forma");
            for (let i = 0; i < toggleForm.length; i++) {
              toggleForm[i].addEventListener("click", () => {
                form.classList.toggle("viewform");
              });
            }
      
            document.getElementById('bottonphp').onclick = function() {
              document.getElementById('main').classList.toggle('background');
            }
            document.getElementById('closeform').onclick = function() {
              document.getElementById('main').classList.remove('background');
            }
      });
