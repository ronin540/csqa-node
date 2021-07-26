<?php
session_start();
if(isset($_SESSION['userId'])){
  header('location: index.php');
}
include "includes/baseTop.php";
?>


<div id="signin">
  <h3>Sign In</h3>
  <p class="text-secondary">If you have not created an account yet, then please
<a href="signup.php">sign up</a> first.</p>
  <form class="login" method="POST" action="phpScripts/signinUser.php">
    <!-- <input
      type="hidden"
      name="csrfmiddlewaretoken"
      value="OoZmtNQbJFPQWniGSetTPqyfar9h3gtoSG5ODMzIW3PZVphrlxwyoMysmBhSmrnh"
    /> -->
    <p>
      <label for="id_login">Username:</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        autofocus="autofocus"
        maxlength="150"
        required=""
        id="id_login"
  
  
      />
    </p>
    <p>
      <label for="id_password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required=""
        id="id_password"
        
      />
    </p>
    <p>
      <label for="id_remember">Remember Me:</label>
      <input type="checkbox" name="remember" id="id_remember" />
    </p>

    <button class="btn btn-primary primaryAction" name = "submit" type="submit">Submit</button>
    
    <div class="mt-3">
      <a class="button secondaryAction" href="/accounts/password/reset/"
        >Forgot Password?</a
      >
    </div>
  </form>
</div>

<?php
include "includes/baseBottom.php";
