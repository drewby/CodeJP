
/*
 * GET api 
 */

exports.people = function(req, res){
  var people = [
      {"name": "Drew Robbins",
       "age": "36",
       "description": "young" },
      {"name": "Akira Inoue",
       "age": "62",
       "description": "old" },
      {"name": "Jun-ichi Sakamoto",
       "age": "85",
       "description": "very old" }
    ];

  res.json(people);

};