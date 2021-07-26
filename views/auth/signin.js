const layout = require('../layout');

function getError (errors, property){
  try{
    return errors.mapped()[property].msg
  } catch {
    return '';
  }
}
module.exports = ({ errors }) => {
    return layout({
        content : `
        <div class="pb-2 pt-4 pr-4 pl-4">
        <h3>Sign In</h3>
      
        <p class="text-secondary">
          If you have not created an account yet, then please
          <a href="/signup">sign up</a> first.
        </p>
      
        <form class="login" method="POST" action="/signin">
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
            <p><span class="error"> ${getError(errors, "username")}</span></p>
          </p>
          
          <p>
            <label for="id_remember">Remember Me:</label>
            <input type="checkbox" name="remember" id="id_remember" />
          </p>
      
          <button class="btn btn-primary primaryAction" type="submit">Sign In</button>
          <div class="mt-3">
            <a class="button secondaryAction" href="/accounts/password/reset/"
              >Forgot Password?</a
            >
          </div>
        </form>
      </div>
    `
    })
}