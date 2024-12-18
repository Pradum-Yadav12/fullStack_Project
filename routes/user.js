const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapasync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js")


router.get("/signup",userController.renderSignUpform )

router.post("/signup", wrapAsync(userController.signUp));

router.get("/login", userController.renderLoginForm)

router.post("/login", saveRedirectUrl, passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), userController.Login)

router.get("/logout", userController.Logout )
module.exports = router;