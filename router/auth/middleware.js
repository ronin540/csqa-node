module.exports = {
    checkAuthOn : (req, res, next) => {
        if(req.session.user){
          return res.redirect('/');
        } 
        next();
    },
    checkAuthOff : (req, res, next) => {
      if(!req.session.user){
        return res.redirect('/signup');
      }
      next();
    }

}