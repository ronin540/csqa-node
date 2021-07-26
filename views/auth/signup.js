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
        <h3>Sign Up</h3>
        
        <p class="text-secondary">
          Already have an account? Then please
          <a href="/signin">sign in</a>.
        </p>
    
        <form
          class="signup"
          id="signup_form"
          method="post"
          action="/signup"
        >
          <p>
            <label for="id_username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autofocus="autofocus"
              minlength="1"
              maxlength="150"
              required=""
              id="id_username"
            />
            <span class="error"> ${getError(errors, "username")}</span>
          </p>
         
          <p>
            <label for="id_email">E-mail (optional):</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              id="id_email"
            />
            <span class="error">${getError(errors, "email")}</span>
          </p>
          <p>
            <label for="id_password1">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              id="id_password"
            />
            <span class="error">${getError(errors, "password1")}</span>
          </p>
          <p>
            <label for="id_password2">Password (again):</label>
            <input
              type="password"
              name="password2"
              placeholder="Password (again)"
              required=""
              id="id_password2"
            />
            <span class="error">${getError(errors, "password2")}</span>
          </p>
    
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
        `
    })
   
};
