<?php
session_start();
include "includes/baseTop.php";

include_once "includes/dbh.inc.php";
$sql = "SELECT questions.title, questions.q_id  FROM questions";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        // print_r($row);
        ?>
         <p>
        <a href="question.php?q=<?php echo $row['q_id'] ?>"> 
        <?php echo $row['title'] ?>
      <!-- <span class="text-secondary num-answers">(2 comments)</span>  -->
       </a> 
     </p> 
        
        <?php
        ;
    } 
}

include "includes/baseBottom.php";
