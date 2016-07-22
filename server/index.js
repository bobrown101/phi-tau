import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
import {chalkSuccess, chalkProcessing} from '../tools/chalkConfig';
// let history = require('connect-history-api-fallback');
let express = require('express');
let path = require('path');


let bodyParser  = require('body-parser');
let morgan      = require('morgan');
let apiConfig = require('./api/config'); // get our config file

let app = express();
app.set('superSecret', apiConfig.secret); // secret variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);
// app.use(history());
let api = require('./api/index.js');

// app.get('/api/v1/testLogin', api.authenticateRoute, api.hello);
app.get('/api/v1/setup', api.setup);
app.post('/api/v1/login', api.login);
app.post('/api/v1/addUser', api.authenticateRoute, api.addUser);
app.post('/api/v1/deleteUser', api.authenticateRoute, api.deleteUser);
app.post('/api/v1/getUsers', api.authenticateRoute, api.getUsers);
app.post('/api/v1/createEvent', api.authenticateRoute, api.createEvent);
app.post('/api/v1/deleteEvent', api.authenticateRoute, api.deleteEvent);
app.post('/api/v1/getEvents', api.authenticateRoute, api.getEvents);
app.post('/api/v1/setUserAttendance', api.authenticateRoute, api.setUserAttendance);
app.post('/api/v1/submitAttendance', api.authenticateRoute, api.submitAttendance);
app.post('/api/v1/addUserToEvent', api.authenticateRoute, api.addUserToEvent);
app.post('/api/v1/createPoll', api.authenticateRoute, api.createPoll);
app.post('/api/v1/notifyUsers', api.notifyUsers);
app.post('/api/v1/getPoll', api.getPoll);
app.post('/api/v1/voteOnPoll', api.voteOnPoll);







if ( app.get('env') === 'development' ) {

  console.log(chalkProcessing("Running server in devlopment mode"));
  const bundler = webpack(config);

  app.use(webpackDevMiddleware(bundler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(bundler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));

  // app.use(webpackHotMiddleware(bundler));
  //
  // app.use(webpackDevMiddleware(bundler, {
  //
  //   stats: { colors: true },
  //   noInfo: true
  // }));
  // app.use("/", express.static(path.resolve('/src')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../' + '/src/index.html'));
  });

}else if(app.get('env') === "production") {

  console.log(chalkProcessing("Running server in production mode"));
  app.use(express.static(path.resolve(__dirname + '../dist')));
  app.use("/", express.static(path.resolve(__dirname + '/../' + '/dist')));
  // app.get((req, res, next) => {
  //   if (req.accepts('html')) {
  //     res.sendFile(`${__dirname}/index.html`);
  //   }
  //   else {
  //     next();
  //   }
  // });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../' + '/dist/index.html'));
  });

}


app.listen(app.get('port'), function() {
  console.log(chalkSuccess('App listening on port: ' + app.get('port')));
});
