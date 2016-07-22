// Twilio Credentials
var accountSid = 'AC796f645ae8eff85ded93a5c98f62877f';
var authToken = 'a003563fa9baa988d06e61bc0ffa8208';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);


module.exports.sendSMS = function(number, content){
  client.messages.create({
   to: number,
   from: "+14137285647",
   body: content
  }, function(err, message) {
      if(err) {
        console.log("Error: ", err);
        throw err;
      }
     console.log("Sent message: " + message.sid);
  });

};
