<?php
session_start();
if(isset($_SESSION['userId'])){
  echo "sessionId INcluded";
  header('location: index.php');
}
include "includes/baseTop.php";
?>

<div id="signup">
  <h3>Sign Up</h3>
  <p class="text-secondary">Already have an account? Then please <a href="signin.php">sign in</a>.</p>
  <form
    class="signup"
    id="signup_form"
    method="post"
    action="phpScripts/signupUser.php"
  >
    <!-- <input
      type="hidden"
      name="csrfmiddlewaretoken"
      value="Iq9kXYCoxEWBmLp93g67jmHS8cWKvBtEMIfM7XlVK2WKlNoUwz9MSIH5km4lOMnx"
    /> -->
    <p>
      <label for="id_username">Username:</label>
      <input
        type="text"
        name="userName"
        placeholder="Username"
        autofocus="autofocus"
        minlength="1"
        maxlength="150"
       
        id="id_username"
      />
    </p>
    <p>
      <label for="id_email">E-mail:</label>
      <input
        type="text"
        name="email"
        placeholder="E-mail address"
        id="id_email"
      />
    </p>
    <p>
      <label for="id_password1">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
       
        id="id_password1"
      />
    </p>
    <p>
      <label for="id_password2">Password (again):</label>
      <input
        type="password"
        name="password2"
        placeholder="Password (again)"
      
        id="id_password2"
      />
    </p>

    <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    
  </form>
</div>


  <!-- signin div -->


<?php
include "includes/baseBottom.php";
?>
