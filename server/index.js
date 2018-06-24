require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session')

const app = express();

app.use(bodyParser.json())

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../build'));

massive({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: true
})
.then( db => {
  app.set('db', db);
})

passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
  //Sample profile
  // Profile {
  //   provider: 'auth0',
  //   displayName: 'test@test.com',
  //   id: 'auth0|5a79edb9ebf64a46ecdd5340',
  //   user_id: 'auth0|5a79edb9ebf64a46ecdd5340',
  //   name: { familyName: undefined, givenName: undefined },
  //   emails: [ { value: 'test@test.com' } ],
  //   picture: 'https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=48
  // 0&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png',
  //   nickname: 'test',
  //   identities:
  //    [ { user_id: '5a79edb9ebf64a46ecdd5340',
  //        provider: 'auth0',
  //        connection: 'Username-Password-Authentication',
  //        isSocial: false } ],
  //   _json:
  //    { email_verified: false,
  //      email: 'test@test.com',
  //      clientID: '1EbbBT8aVxRSUEuYeGxPn3VdAu1eJm7J',
  //      updated_at: '2018-06-24T03:14:20.799Z',
  //      name: 'test@test.com',
  //      picture: 'https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s
  // =480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png',
  //      user_id: 'auth0|5a79edb9ebf64a46ecdd5340',
  //      nickname: 'test',
  //      identities: [ [Object] ],
  //      created_at: '2018-02-06T18:02:33.322Z',
  //      sub: 'auth0|5a79edb9ebf64a46ecdd5340' },
  //   _raw: '{"email_verified":false,"email":"test@test.com","clientID":"1EbbBT8aVx
  // RSUEuYeGxPn3VdAu1eJm7J","updated_at":"2018-06-24T03:14:20.799Z","name":"test@te
  // st.com","picture":"https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c44
  // 52?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png","user_id":"auth
  // 0|5a79edb9ebf64a46ecdd5340","nickname":"test","identities":[{"user_id":"5a79edb
  // 9ebf64a46ecdd5340","provider":"auth0","connection":"Username-Password-Authentic
  // ation","isSocial":false}],"created_at":"2018-02-06T18:02:33.322Z","sub":"auth0|
  // 5a79edb9ebf64a46ecdd5340"}' } 

  const db = app.get('db');

  // db.create_tables;
  // db.create_sample_db;

  db.find_user([ profile.identities[0].user_id ])
  .then( user => {
    // console.log(user, '48 user')
   if ( user[0] ) {

     return done( null, { id: user[0].id } );

   } else {

     db.addContact([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id])
     .then( user => {
        return done( null, { id: user[0].id } );
     })

   }
  })


}));

const api = require('./api.js');

// endpoint queries

app.get('/api/getData', api.getData);

app.get('/api/getUsers', api.getPersons);
app.get('/api/getUser/:id', api.getSingleUser);
app.post('/api/addUser', api.addUser);
app.put('/api/editUser/:id', api.editUser);
app.delete('/api/deleteUser/:id', api.deleteUser);

app.get('/api/getCompanies', api.getCompanies);
app.get('/api/getCompany/:id', api.getSingleCompany);
app.post('/api/addCompany', api.addCompany);
app.put('/api/editCompany/:id', api.editCompany);
app.delete('/api/deleteCompany/:id', api.deleteCompany);

app.get('/api/getJobs', api.getJobs);
app.get('/api/getJob/:id', api.getSingleJob);
app.post('/api/addJob', api.addJob);
app.put('/api/editJob/:id', api.editJob);
app.delete('/api/deleteJob/:id', api.deleteJob);


app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/private',
  failureRedirect: 'http://localhost:3000/#/'
}))

passport.serializeUser(function(user, done) {
  // console.log(user, 'should be req.user info')
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  // console.log(obj, 'obj from deserialize line 80')
  app.get('db').find_session_user([obj.id])
  .then( user => {
    return done(null, user[0]);
  })
});

app.get('/auth/me', (req, res, next) => {
  if (!req.user) {
    return res.status(404).send('User not found');
  } else {
    return res.status(200).send(req.user);
  }
})




app.get('/auth/logout', (req, res) => {
  req.logOut();
  return res.redirect(302, 'http://localhost:3000/#/');
})

let PORT = 3005;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})    
