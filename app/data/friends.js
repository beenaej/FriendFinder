// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsList = [
  {
    name: "Ahmed",
    profilePic: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzNjk5NDEzMV5BMl5BanBnXkFtZTgwMTk4NjA2ODE@._V1_UX214_CR0,0,214,317_AL_.jpg",
    scores: ["5","1","4","4","5","1","2","5","4","1"]
   },
  {
    name: "Mikhail",
    profilePic: "https://www.hum.tv/wp-content/uploads/2017/02/Mikaal-1.jpg",
    scores: ["5","2","3","4","5","2","1","5","3","2"]
   },
   {
    name: "Katrina",
    profilePic: "http://www.kinyu-z.net/data/wallpapers/68/938156.jpg",
    scores: ["4","2","5","5","4","2","3","4","4","1"]
   },
   {
    name: "Gal",
    profilePic: "https://gl-images.condecdn.net/image/07b3ggr80lr/crop/405",
    scores: ["5","2","4","5","3","3","1","4","5","5"]
   },
   {
    name: "Rola",
    profilePic: "https://www.bu.edu/dental/files/2017/07/Rola-Rabah.jpg",
    scores: ["4","2","4","5","5","2","2","5","4","2"]
   },
   {
    name: "Farzan",
    profilePic: "http://www1.pictures.zimbio.com/gi/Farzan+Athari+People+Choice+Awards+2010+Red+JVCaQ759O9al.jpg",
    scores: ["5","1","3","4","5","1","1","5","3","2"]
   } 
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsList;
