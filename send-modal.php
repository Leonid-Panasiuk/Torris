<?php
$phone = stripslashes(htmlspecialchars($_POST['phone']));

?>

<?php
        $phone = stripslashes(htmlspecialchars($_POST['phone']));
        $headers = "Content-Type: text/plain; charset=UTF-8";
        $from = 'From: Torris'; 
        $to = 'homeinfa2@gmail.com'; 
        $subject = 'Torris'; 
        
         $message = "
         Источник: Модальное окно
         Телефон: $phone\n";
         

         echo '<style>';
         echo 'h1 {';
         echo 'text-align: center;';
         echo '}';
         echo '';
         echo 'p {';
         echo 'text-align: center;';
         echo '}';
         echo '</style>';
     
         echo '<h1 style="color:green;">Спасибо! в скором времени наши менеджеры свяжутся с вами.</h1>';
     
         echo '<ul class="list_info">';
         echo '<li>';
         echo '<span>Телефон: </span>';
         echo $phone;
         echo '</li>';
         echo '</ul>';
     
         echo '<p class="fail success">';
         echo 'Если вы ошиблись при заполнени формы, то, пожалуйста,';
         echo '<a href="javascript: history.back(-1);">заполните заявку еще раз</a>';
         echo '</p>';
        
        mail($to, $subject, $message, $headers); ?>