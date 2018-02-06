require("dotenv").config();

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
  case "my-tweets":
    tweets();
    break;

  case "spotify":
    spotify();
    break;

  case "movie":
    movie();
    break;
};

function tweets() {
var request = require("request");

request("" function(error, response, body) {

  if (!error && response.statusCode === 200) {

  };
})
};

function movie() {
  var request = require("request");

  var nodeArgs = process.argv;

  var movieName = "";

for (var i = 3; i < nodeArgs.length; i++) {

  var movieName = nodeArgs[i];

};

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Year: " + JSON.parse(body).Year);
      console.log("Ratings: " + JSON.parse(body).Ratings);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    };
  });
};

function spotify() {
  var nodeArgs = process.argv;
  var songName = "";

  for (var i = 3; i < node.Args.length; i++) {
    var songName = nodeArgs[i];
  };
  var queryUrl = ""
}
