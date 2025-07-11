console.log("🌐 ENV:", process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CALLBACK_URL);


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {

      let user = await User.findOne({ googleId: profile.id });

      if (!user) {

        user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {

          user = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          await user.save();
        } else {

          user.googleId = profile.id;
          await user.save();
        }
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

console.log("🌐 ENV:", process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CALLBACK_URL);


module.exports = passport;
