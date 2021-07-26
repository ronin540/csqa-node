const { check } = require("express-validator");
const User = require("../../models/User");

module.exports = {
  requireUsername: check("username")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Must be between 2 to 20 letters")
    .custom(async (username) => {
      const existingUsername = await User.getOneBy({ username });
      if (existingUsername.length > 0) {
        throw new Error("Username is not available");
      }
    }),
  requireEmail: check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Must provide a valid Email")
    .custom(async (email) => {
      const existingUser = await User.getOneBy({ email });
      if (existingUser.length > 0) {
        throw new Error("Email already in use");
      }
    }),
  requirePassword: check("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 6 to 20 letters"),
  requireConfirmPassword: check("password2")
    .trim()
    .custom((password2, { req }) => {
      if (password2 !== req.body.password) {
        throw new Error("Passwords must match");
      } else {
        return true;
      }
    }),
  requireUsernamePasswordExist: check("username")
    .trim()
    .custom(async (username, {req}) => {
      const result = await User.getOneBy({ username });
    
      if (!result.length > 0 || req.body.password !== result[0].password) {
        throw new Error("username or password are not correct");
      }
    }),
};
