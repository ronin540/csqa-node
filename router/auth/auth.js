const express = require("express");
const { validationResult } = require("express-validator");

const User = require("../../models/User");
const signupTemplate = require("../../views/auth/signup");
const signinTemplate = require('../../views/auth/signin');
const { checkAuthOn } = require('./middleware');

const {
  requireUsername,
  requireEmail,
  requirePassword,
  requireConfirmPassword,
  requireUsernamePasswordExist
} = require("./validators");

const router = express.Router();

router.get("/signup", checkAuthOn, (req, res) => {
  res.send(signupTemplate({}));
});

router.post(
  "/signup",
  [requireUsername, requireEmail, requirePassword, requireConfirmPassword],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ errors }));
    }
    const { username, email, password } = req.body;
    const data = await User.create({ username, email, password });
    res.redirect("/signin");
  }
);

router.get("/signin", checkAuthOn, (req, res) => {
  res.send(signinTemplate({}));
});

router.post("/signin", requireUsernamePasswordExist, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.send(signinTemplate({errors}));
  }
  const {username} = req.body; 
  const [user] = await User.getOneBy({username});
  req.session.user = {userId : user.userId, username : user.username};
  res.redirect('/');
})

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
})

module.exports = router;
