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
    
      var newFriendScores = req.body.scores;  //here we get the current friend's scores from the body
      var scoresArray = [];
      var friendCount = 0;
      var bestMatch = 0;

      //go through all the friends in the list
      for (var i=0; i < friendsList.length; i++){
        var scoreDiff = 0;
        //go through the scores to compare friends
        //get the difference of scores between current user's scores against the ones from other users and adding them up to get scoreDiff
        for (var n = 0; n < newFriendScores.length; n++){
          scoreDiff += (Math.abs(parseInt(friendsList[i].scores[n]) - parseInt(newFriendScores[n]))); //getting the absolute value of the difference
        }
        scoresArray.push(scoreDiff); //creating an array with the score difference
      }


    //after all friends are compared, find the best match based on the least amount of difference in scores
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
