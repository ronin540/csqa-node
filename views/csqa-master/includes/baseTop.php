
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>CSQA - An open-source Q&A website for coders</title>
  </head>
  
  <!-- body -->
  <body class="bg-light">
    <div class="container" style="max-width:700px">
        <div class="card shadow-sm" style="margin-top: 20px">
            <div class="card-header">
                <h6 style="margin-bottom: 0; margin-top: 7; display: inline-block">
                    <a href="/" class="text-dark">CSQA
                    <?php
                        if(!isset($_SESSION['userId'])){
                          echo '<span class="site-title-second-half"> - An open-source Q&A website for coders</span>';
                        }
                        ?>
                    </a>
                </h6>
                <span style="float: right">
                    <span class="csqa-nav">
                        <a href="" class="text-dark">Search</a> |
                      <?php
                      if(isset($_SESSION['userId'])){
                        echo '<a href="" class="text-dark">My Questions</a> |
                        <a href="" class="text-dark">My Answers</a> |';
                      }
                      ?>
                        <a href="newQuestion.php" class="text-dark" style="display: inline-block">
                            New Question
                        </a>
                    </span>
                </span>
            </div>
            <div class="pb-2 pt-4 pr-4 pl-4">