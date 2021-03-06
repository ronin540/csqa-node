
const checkLogin = (user) => {
  if(user){
    return `<a href="/logout" class="text-secondary">Log out (${user.username}, 0 points)</a>`;
  } else {
    return `<a href="/signup" class="text-secondary">Sign up / log in</a>`
  }
}

module.exports = ({ content }, user) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/style.css">
        <title>CSQA</title>
      </head>
      <body class="bg-light">
        <div class="container" style="max-width: 700px">
          <div class="card shadow-sm" style="margin-top: 20px">
            <div class="card-header">
              <h6 style="margin-bottom: 0; margin-top: 7px; display: inline-block">
                <a href="/" class="text-dark"
                  >CSQA
    
                  <span class="site-title-second-half">
                    - An open-source Q&amp;A website for coders</span
                  >
                </a>
              </h6>
              <span style="float: right">
                <span class="csqa-nav">
                  <a href="/search/" class="text-dark">Search</a> |
    
                  <a
                    href="/question/new"
                    class="text-dark"
                    style="display: inline-block"
                  >
                    New Question
                  </a>
                </span>
              </span>
            </div>
            ${ content }
          </div>
        </div>
        <div
          class="container text-right"
          style="
            max-width: 700px;
            padding-right: 21px;
            padding-top: 2px;
            font-size: 14px;
            color: #6c757d;
            margin-bottom: 7px;
          "
        >
          <a href="/" class="text-secondary">Home</a> |
    
          ${checkLogin(user)} |
    
          <a
            href="https://github.com/ykdojo/csqa"
            class="text-secondary"
            target="_blank"
            >Source code</a
          >
          | <a href="/about" class="text-secondary">About</a> |
          <a href="/leaderboard" class="text-secondary">Leaderboard</a>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="/scripts/script.js"></script>
      </body>
    </html>
    
    `
}