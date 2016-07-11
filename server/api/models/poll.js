// get an instance of mongoose and mongoose.Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Poll', new Schema({
  name: String,
  options:[
    {
      name: String,
      votes: Number
    }
  ],
  usersVoted:[]
}));
