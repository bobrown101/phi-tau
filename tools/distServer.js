// This file configures a web server for testing the production build
// on your local machine.

// import browserSync from 'browser-sync';
// import historyApiFallback from 'connect-history-api-fallback';

// // Run Browsersync
// browserSync({
//   port: process.env.PORT || 3000,
//   ui: {
//     port: 3001
//   },
//   server: {
//     baseDir: 'dist'
//   },
//
//   files: [
//     'src/*.html'
//   ],
//
//   middleware: [historyApiFallback()]
// });


let history = require('connect-history-api-fallback');
let express = require('express');

let app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/dist'));
app.use(history());

// compression middleware compresses your server responses which makes them
// smaller (applies also to assets). You can read more about that technique
// and other good practices on official Express.js docs http://mxs.is/googmy
// app.use(compression());
app.use("/", express.static(__dirname + '/../' + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/../' + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port: ' + app.get('port')); //eslint-disable-line
});
