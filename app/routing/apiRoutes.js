// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsList = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request that displays JSON of all possible friends
 app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

    // API POST Requests
  // Below code gets the new friend's scores to compare with friends in the friendsData Array
 
  app.post("/api/friends", function(req, res) {
    
      var newFriendScores = req.body.scores;
      var scoresArray = [];
      var friendCount = 0;
      var bestMatch = 0;

      for (var i=0; i < friendsList.length; i++){
        var scoreDiff = 0;
        //go through the scores to compare friends
        for (var n = 0; n < newFriendScores.length; n++){
          scoreDiff += (Math.abs(parseInt(friendsList[i].scores[n]) - parseInt(newFriendScores[n])));
        }
        scoresArray.push(scoreDiff);
      }


    //after all friends are compared, find the best match
    for (var i = 0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var theOne = friendsList[bestMatch];
    res.json(theOne);

  //pushes the new submission into the friendsData array
  friendsList.push(req.body);

  });
};
