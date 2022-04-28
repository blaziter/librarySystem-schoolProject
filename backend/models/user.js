const mongoose = require('mongoose');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3
    },
    name: String,
    role: String,
    googleId: String,
    secret: String,
    city: String,
    state: String,
    zip: String,
    cartId: String,
    country: String,
}, {
    timestamps: true,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use(new GoogleStrategy({
    clientID: `${process.env.CLIENT_ID}`,
    clientSecret: `${process.env.CLIENT_SECRET}`,
    callbackURL: `http://localhost:9000/user/auth/google/callback`,
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            if (!user._doc.username && !user._doc.role) {
                user.username = profile.id
                user.role = 'Customer'
                user.save()
            }
            return cb(err, user);
        });
    }
));

module.exports = User;