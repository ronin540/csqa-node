<?php
session_start();
if(!isset($_SESSION['userId'])){
  header("location:signup.php");
}
include "includes/baseTop.php";
?>
<form action="phpScripts/insertQuestion.php" method="post">
        <input type="hidden" name="userId" value= "<?php echo $_SESSION['userId']?>">
        <div class="form-group">
          <label for="title">Question</label>
          <input class="form-control" id="title" name="title" placeholder="Enter your question here." required="">
        </div>
        <div class="form-group">
          <label for="title">Details</label>
          <textarea class="form-control" id="body" name="body" rows="3"></textarea>
        </div>
        <button type="submit" name="submit" class="btn btn-primary mb-2">Submit</button>
    </form>

<?php
include "includes/baseBottom.php";
?>