const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.addUser);
//router.put('/:id', userController.putUser);
//router.patch('/:id', userController.patchUser);
//router.delete('/:id', userController.deleteUser);
router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);
router.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.redirect("http://localhost:3000");
    }
);

router.get("/logout", function (req, res) {
    res.redirect("http://localhost:3000/");
});

module.exports = router;