import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
import {chalkSuccess, chalkProcessing} from '../tools/chalkConfig';
let history = require('connect-history-api-fallback');
let express = require('express');
let path = require('path');

let app = express();
app.set('port', process.env.PORT || 3000);
app.use(history());


if ( app.get('env') === 'development' ) {

  console.log(chalkProcessing("Running server in devlopment mode"));
  const bundler = webpack(config);
  // app.use(express.static('/src'));
  app.use(webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
    noInfo: true
  }));
  app.use(webpackHotMiddleware(bundler));
  app.use("/", express.static(path.resolve('/src')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../' + '/src/index.html'));
  });

}else if(app.get('env') === "production") {

  console.log(chalkProcessing("Running server in production mode"));
  app.use(express.static(path.resolve(__dirname + '../dist')));
  app.use("/", express.static(path.resolve(__dirname + '/../' + '/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../' + '/dist/index.html'));
  });

}


app.listen(app.get('port'), function() {
  console.log(chalkSuccess('App listening on port: ' + app.get('port'))); //eslint-disable-line
});
