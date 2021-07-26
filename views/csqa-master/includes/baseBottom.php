</div>
        </div>
    </div>


    
    <div class="container text-right" style="max-width:700px; padding-right:21px; padding-top:2px; font-size:14px; color: #6c757d; margin-bottom: 7px;">
            <a href="index.php" class="text-secondary">Home</a> | 
      
            <?php
          if(isset($_SESSION['userId'])){
                  echo '<a href="logout.php" class="text-secondary">Log out (' . $_SESSION["username"] .') </a> |' ;
                }
                else {
                  echo '<a href="signup.php" class="text-secondary">Sign up / log in</a> |';
                }
            ?>
             
      
            <a href="https://github.com/ykdojo/csqa" class="text-secondary" target="_blank">Source code</a> | 
        <a href="/about" class="text-secondary">About</a> |
        <a href="/leaderboard" class="text-secondary">Leaderboard</a>
    </div>
</body>
    
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
