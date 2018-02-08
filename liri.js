require("dotenv").config();

//var spotify = new Spotify(keys.spotify);

var action = process.argv[2];

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
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
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
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
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
