var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = 'BrandonGA';
var GITHUB_TOKEN = 'b5fdb84f8ea04bb86ce1a56a671e8c3fd3aaedce';



  function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +
  '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
     }
    };


  request.get(options , function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received //
    console.log('body:', body);
  })
  console.log(options, requestURL)
}
getRepoContributors('jquery', 'jquery')



