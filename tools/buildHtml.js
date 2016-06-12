// This script copies src/index.html into /dist/index.html
// and adds TrackJS error tracking code for use in production
// when errLytics is set to true below and a trackJsToken is provided.
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only want to track errors in the built production code.

// Allowing console calls below since this is a build file.
/* eslint-disable no-console */

import fs from 'fs';
import {chalkSuccess, chalkError, chalkWarning} from './chalkConfig';
import cheerio from 'cheerio';

const useErrLytics = true; // If you choose not to use TrackJS, just set this to false and the build warning will go away.
const errLyticsToken = 'gn4ovuQiFmrX27dnJcSq8JZaUd6uuX0u51APC21JHNA'; // If you choose to use TrackJS, insert your unique token here. To get a token, go to https://trackjs.com

fs.readFile('src/index.html', 'utf8', (readError, markup) => {
  if (readError) {
    return console.log(chalkError(readError));
  }

  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  $('head').append('<link rel="stylesheet" href="/styles.css">');

  if (useErrLytics) {
    if (errLyticsToken) {
      const errLytics = `
      <script type='text/javascript'>
          window._errLyticsConfig = {
              apiKey: '${errLyticsToken}'
          }
      </script>
      <script type='text/javascript' crossorigin='anonymous' src='https://cdn.errlytics.com/errlytics.min.js'></script>
      `;


      $('head').prepend(errLytics); // add TrackJS tracking code to the top of <head>
    } else {
      console.log(chalkWarning('To track JavaScript errors, sign up for errLytics and enter your token in /tools/build.html on line 10.'));
    }
  }

  fs.writeFile('dist/index.html', $.html(), 'utf8', (writeError) => {
    if (writeError) {
      return console.log(chalkError(writeError));
    }
    console.log(chalkSuccess('index.html written to /dist'));

    return writeError;
  });

  return readError;
});
