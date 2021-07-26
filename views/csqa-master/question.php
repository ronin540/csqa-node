<?php
    session_start();
    include_once "includes/dbh.inc.php";
    $q =  htmlspecialchars($_GET["q"]);
    $query = "SELECT * FROM questions INNER JOIN users ON questions.user_id = users.userId WHERE questions.q_id = $q";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) > 0){
      $row = mysqli_fetch_assoc($result);
     
     } else {
  echo "error";
}

$query2 = "SELECT * FROM answers INNER JOIN users ON answers.user_id = users.userId WHERE answers.q_id = $q";
$result2 = mysqli_query($conn,$query2);
    include "includes/baseTop.php";

?>

<div id="question">
  <h5><?php echo $row['title'] ?></h5> 
  <div style="margin-bottom: 5px; font-size: 17px; white-space: break-spaces;"><?php echo $row['body'] ?>
  </div> 

  <div class="text-secondary" style="font-size: 14px;">
    posted by <?php echo $row['userName'] ?>
    <span class="separator">|</span>23 days ago
    
    <span class="separator">|</span> 
    <a href="javascript:void(0)" class="text-secondary">upvote</a> 
    <span class="separator">|</span> 
    <a href="javascript:void(0)" class="text-secondary">downvote</a> 
    <span class="separator">|</span> 
    <span>0 points</span>
  </div> 
 


<?php 
  if(mysqli_num_rows($result2) > 0){
    while($row2 = mysqli_fetch_assoc($result2)){
    ?>
  <div>
    <hr class="answer-hr"> 
      <div class="answer-block">
        <div class="answer-text"><?php echo $row2['answer'] ?> </div> 
        <div class="text-secondary answer-sub">
          <span><?php echo $row2['userName']  ?></span> 
          <span class="separator">|</span>
          <span>18 days ago</span> 
          <span class="separator">|</span> 
          <span>
            <a href="javascript:void(0)" class="text-secondary">upvote</a> 
            <span class="separator">|</span> 
            <a href="javascript:void(0)" class="text-secondary">downvote</a> 
            <span class="separator">|</span>
          </span> 
          <span>1 points</span>
        </div>
      </div>
  </div> 

<?php
    }}
?>
<hr class="answer-hr"> 


  
  
  <!----><!---->

  <form action="phpScripts/insertAns.php" method="post">
       <input type="hidden" name="userId" value="<?php echo $_SESSION['userId'] ?>">
       <input type="hidden" name="q_Id" value="<?php echo $row['q_id'] ?>">
      <div class="form-group">
        <textarea id="text" name="text" rows="7" placeholder="Type your answer here." required="required" class="form-control"></textarea>
      </div> 
      <button type="submit" name="submit" value = "submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  <div style="text-align: right; font-size: 14px; margin-bottom: 5px">
    <a href="javascript:void(0)"
      ><span>Show all comments</span>
      <!----></a
    >
  </div>
 
   </div> 
  <?php
    if(!isset($_SESSION['userId'])){
      echo '<p><a href="/accounts/login">Log in to answer this question</a></p>';
    }
  ?>
  



<?php
include "includes/baseBottom.php";


 // $stmt = mysqli_prepare($conn,$query);
    // if($stmt){
    //   mysqli_stmt_bind_param($stmt, 's', $q);
    //   mysqli_stmt_execute($stmt);
    //   mysqli_stmt_bind_result($stmt, $q_id, $user_id, $title, $body);
    //   if(mysqli_stmt_fetch($stmt)){
    //     $result = array(
    //       "q_id" => $q_id,
    //       "user_id" => $user_id,
    //       "title" => $title,
    //       "body" => $body
    //     );
    //   }
    //   mysqli_stmt_close($stmt);
    // }
?>