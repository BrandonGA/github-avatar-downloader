var request = require('request');
var fs = require ('fs')

var GITHUB_USER = 'BrandonGA';
var GITHUB_TOKEN = 'b5fdb84f8ea04bb86ce1a56a671e8c3fd3aaedce';
var Githubrepo = 'facebook'
var GitHubname = 'react'

let urlDirectory = []


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
    var contributors = JSON.parse(body)
    for (url of contributors) {
      urlDirectory.push(url['avatar_url'])
    }
    cb()
  })
}

function downloadImageByURL() {
  for (link in urlDirectory) {
    request.get(urlDirectory[link])
    .pipe(fs.createWriteStream('./avatars/' + link + '.jpg'))
  }
}

getRepoContributors("facebook", "react", downloadImageByURL)
