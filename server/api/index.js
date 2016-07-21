let mongoose    = require('mongoose');
let bcrypt = require('bcrypt');
let jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
let config = require('./config'); // get our config file
let User   = require('./models/user'); // get our mongoose model
let CustomEvent = require('./models/event');
let Poll = require('./models/poll');
let _ = require("lodash");

let twilioClient = require('./twilioClient.js');


mongoose.connect(config.database); // connect to database

module.exports = {
  authenticateRoute: function(req, res, next) {

    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  },
  login : function(req, res){
    // find the user
    console.log(req.body);
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      console.log(req.body.email);

      if (err) throw err;

      if (!user) {
        res.json({ success: false, errorSource: "email", message: 'Authentication failed. User not found.' });
      } else if (user) {

        if(!user.admin){
          res.json({ success: false, errorSource: "email", message: 'Authentication failed. Not admin' });

        }

        // check if password matches
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ success: false, errorSource: "password", message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          let token = jwt.sign(user, config.secret, {
            expiresIn: '1440m'
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }

    });
  },
  setup: function(req, res){
    console.log("testing123");
    // create a sample user
    let nick = new User({
      email: 'bobrown101@gmail.com',
      phone_number: '+1 518-495-0113',
      name: "Brady Brown",
      password: bcrypt.hashSync("password", 10),
      admin: true
    });

    // save the sample user
    nick.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  },
  addUser: function(req, res){
    // create a sample user
    let newUser = new User({
      email: req.body.email,
      phone_number: req.body.phone_number,
      name: req.body.name,
      // password: bcrypt.hashSync("password", 10),
      admin: false
    });

    // save the sample user
    newUser.save(function(err) {
      if (err) {
        res.json({ success: false, message: err });
        throw err;
      }

      console.log('User saved successfully');
      res.json({ success: true, message: 'User saved successfully' });
    });
  },
  deleteUser: function(req, res){
    if( ! req.body.userID){
      throw(new Error("userID not provided"));
    }

    User.find({_id: req.body.userID}).remove().exec(function(err, result){
      if(err){
        throw err;
      }

      console.log("remove user result", result);

      res.send({
        success: true,
        message: "User successfully deleted"
      });
    });
  },
  getUsers: function(req, res){
    console.log(req.body);
    User.find({}, function(err, users) {
      if(err){
        throw err;
      }

      let formatted_users = users.map(function(obj){
        return {
          _id: obj._id,
          email: obj.email,
          phone_number: obj.phone_number,
          name: obj.name
        };
      });
      res.json({
        success: true,
        message: 'Users will be found in users',
        users: formatted_users
      });
    });
  },
  createEvent: function(req, res) {

    User.find({}, function(err, users){
      if(err){
        throw err;
      }
      if( ! req.body.event_name){
        throw(new Error("event_name not provided"));
      }
      let event = new CustomEvent({
        eventTime: Date.now(),
        // usersAbsent: users,
        eventName: req.body.event_name,
        polls: []
      });
      // save the sample user
      event.save(function(err) {
        if (err) throw err;
        console.log('Event saved successfully');
        res.json({ success: true, event: event });
      });

    });

  },
  deleteEvent: function(req, res){
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }

    CustomEvent.find({_id: req.body.eventID}).remove().exec(function(err, result){
      if(err){
        throw err;
      }

      console.log("remove event result", result);

      res.send({
        success: true,
        message: "Event successfully deleted"
      });
    });
  },
  getEvents: function(req, res){
    console.log(req.body);
    CustomEvent.find({}, function(err, events) {
      if(err){
        throw err;
      }
      res.json({
        success: true,
        message: 'Events will be found in events',
        events: events
      });
    });
  },
  addUserToEvent: function(req, res) {
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }
    if( ! req.body.userID){
      throw(new Error("userID not provided"));
    }
    User.findOne({_id: req.body.userID}, function(err, user) {
      if (err){
        throw err;
      }
      CustomEvent.update({_id: req.body.eventID}, {$push: { "users": user }}, function(err) {
        if(err) {
          throw err;
        }
        else {
          console.log('Event saved successfully');
          res.json({ success: true });
        }});

    });
  },
  setUserAttendance: function(req, res){
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }
    if( ! req.body.user){
      throw(new Error("user not provided"));
    }
    if( ! req.body.attendance){
      throw(new Error("attendance not provided"));
    }

    CustomEvent.update({_id: req.body.eventID},
      {
        $pull: { "usersPresent": {_id: req.body.user._id}, "usersAbsent": {_id: req.body.user._id}, "usersExcused": {_id: req.body.user._id}, "usersCoop": {_id: req.body.user._id} }
      }, function(err,data) {
      if(err) {
        console.log("Error: ", err);
        throw err;
      }
      else {
        console.log("data: ", data);
        console.log(req.body.user.name, " is ", req.body.attendance, " for event: " + req.body.eventID);



        if(req.body.attendance == "present"){
          CustomEvent.update({_id: req.body.eventID},
            {
              $push: { "usersPresent": req.body.user }
            }, function(err) {
            if(err) {
              console.log("Error: ", err);
              throw err;
            }
            else {
              console.log('Attendance saved correctly');
              res.json({ success: true });
            }});
        }
        else if(req.body.attendance == "absent"){
          CustomEvent.update({_id: req.body.eventID},
            {
              $push: { "usersAbsent": req.body.user }
            }, function(err) {
            if(err) {
              console.log("Error: ", err);
              throw err;
            }
            else {
              console.log('Attendance saved correctly');
              res.json({ success: true });
            }});
        }
        else if(req.body.attendance == "excused"){
          CustomEvent.update({_id: req.body.eventID},
            {
              $push: { "usersExcused": req.body.user }
            }, function(err) {
            if(err) {
              console.log("Error: ", err);
              throw err;
            }
            else {
              console.log('Attendance saved correctly');
              res.json({ success: true });
            }});
        }
        else if(req.body.attendance == "coop"){
          CustomEvent.update({_id: req.body.eventID},
            {
              $push: { "usersCoop": req.body.user }
            }, function(err) {
            if(err) {
              console.log("Error: ", err);
              throw err;
            }
            else {
              console.log('Attendance saved correctly');
              res.json({ success: true });
            }});
        }else{
          res.json({success: false, message: "attendance not acceptable option"});
        }


      }});
  },
  submitAttendance: function(req, res) {
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }
    if( ! req.body.usersPresent){
      throw(new Error("usersPresent not provided"));
    }
    if( ! req.body.usersAbsent){
      throw(new Error("usersAbsent not provided"));
    }
    if( ! req.body.usersExcused){
      throw(new Error("usersExcused not provided"));
    }
    if( ! req.body.usersCoop){
      throw(new Error("usersCoop not provided"));
    }

    for(let user in req.body.usersPresent){
      CustomEvent.update({_id: req.body.eventID}, {$push: { "usersPresent": req.body.usersPresent[user] }}, function(err) {
        if(err) {
          throw err;
        }
        else {
          console.log('Event saved successfully');
          // res.json({ success: true });
        }});
    }

    for(let user in req.body.usersAbsent){
      CustomEvent.update({_id: req.body.eventID}, {$push: { "usersAbsent": req.body.usersAbsent[user] }}, function(err) {
        if(err) {
          throw err;
        }
        else {
          console.log('Event saved successfully');
          // res.json({ success: true });
        }});
    }

    for(let user in req.body.usersExcused){
      CustomEvent.update({_id: req.body.eventID}, {$push: { "usersExcused": req.body.usersExcused[user] }}, function(err) {
        if(err) {
          throw err;
        }
        else {
          console.log('Event saved successfully');
          // res.json({ success: true });
        }});
    }

    for(let user in req.body.usersCoop){
      CustomEvent.update({_id: req.body.eventID}, {$push: { "usersCoop": req.body.usersCoop[user] }}, function(err) {
        if(err) {
          throw err;
        }
        else {
          console.log('Event saved successfully');
          // res.json({ success: true });
        }});
    }

    res.send({success: true, message: "Attendance Logged"});

  },
  createPoll: function(req, res) {
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }
    if( ! req.body.pollName){
      throw(new Error("pollName not provided"));
    }
    if( ! req.body.options){
      throw(new Error("options not provided"));
    }

    CustomEvent.findOne({_id: req.body.eventID}, function(err, event) {
      if (err){
        throw err;
      }

      console.log(req.body.options);
      let formattedOptions = JSON.parse(req.body.options).map(function(option){
        return {
          name: option,
          votes: 0
        };
      });

      let newPoll = new Poll({
        name: req.body.pollName,
        options: formattedOptions
      });

      newPoll.save();

      event.polls.push(newPoll);

      // save the event
      event.save(function(err) {
        if (err) throw err;
        console.log('Event saved successfully');
        res.json({ success: true, event: event });
      });


    });

  },
  getPoll: function(req, res){
    if( ! req.body.pollID){
      throw(new Error("pollID not provided"));
    }

    Poll.findById(req.body.pollID, function(err, poll) {
      if(err){
        throw err;
      }
      res.json({success: true, poll: poll});
    });
  },
  voteOnPoll: function(req, res){
    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }

    if( ! req.body.pollID){
      throw(new Error("pollID not provided"));
    }

    if( ! req.body.userID){
      throw(new Error("userID not provided"));
    }

    if( ! req.body.voteID){
      throw(new Error("voteID not provided"));
    }

    // Make sure that user can vote
      // they belong to the event
      // they havent already voted

    CustomEvent.findOne({_id: req.body.eventID}, function(eventerr, event){
      if(eventerr){
        throw eventerr;
      }
      console.log("got event");
      Poll.findOne({_id: req.body.pollID}, function(pollerr, poll){
        if(pollerr){
          throw pollerr;
        }
        console.log("got poll");

        User.findOne({_id: req.body.userID}, function(usererr, user){
          if(usererr){
            throw usererr;
          }
          console.log("got user");



          // let userindex = _.findIndex(poll.usersVoted, function(o) {
          //   console.log(o);
          //   return o._id == user._id;
          // });

          let foundUser = false;


          for(let i = 0; i<poll.usersVoted.length; i++){
            if(String(poll.usersVoted[i]._id) == String(user._id)){
              foundUser = true;
            }
          }


          if(foundUser){
            return res.json({ success: false, message: "User has already voted" });
          }

          foundUser = false;

          console.log(event);

          for(let i = 0; i<event.users; i++){
            console.log("user voting:");
            console.log(user._id);
            console.log("user at event:");
            console.log(event.users[i]._id);
            if(event.users[i]._id == user._id){
              foundUser = true;
            }
          }

          if(!foundUser){
            return res.json({ success: false, message: "User doesnt exist in event - were they not present for attendance?" });
          }

          console.log("poll");
          console.log(poll);

          poll.options = poll.options.map(function(obj){
            console.log(String(obj._id) == String(req.body.voteID));
            if(String(obj._id) == String(req.body.voteID)){
              obj.votes += 1;
            }

            return obj;
          });

          poll.usersVoted.push(user);

          poll.save(function(err){
            if(err){
              throw err;
            }

            res.json({ success: true, poll: poll });
            console.log("Saved document with updated vote");
          });

        });
      });
    });



  },

  notifyUsers: function(req, res) {

    console.log(req.body);

    if( ! req.body.eventID){
      throw(new Error("eventID not provided"));
    }

    if( ! req.body.pollID){
      throw(new Error("pollID not provided"));
    }

    // //TODO - this probably isnt the best way to hash, but oh well. Its just to
    // //prevent people from voting more than once.
    // let hashCode = function(s){
    //   return s.split("").reduce(
    //     function(a,b){
    //       a=((a<<5)-a)+b.charCodeAt(0);return a&a;
    //     },
    //     0
    //   );
    // };

    //TODO - only notify users at event

    User.find({}, function(err, users) {
      if(err){
        return res.json({ success: false, message: err });
        // throw err;
      }


      users.forEach(function(obj){

        let message = "Please click the link below to vote: \n";

        let host = req.protocol + '://' + req.get('host') + req.originalUrl;

        message = message + host + '/vote'
                  + '?eventID=' + req.body.eventID
                  + '&pollID=' + req.body.pollID
                  + '&userID=' + obj._id;

        twilioClient.sendSMS(obj.phone_number, message);

      });

      res.json({
        success: true,
        message: 'Notified ' + users.length + ' users.'
      });

    });
  }
};
