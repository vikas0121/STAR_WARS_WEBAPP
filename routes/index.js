var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res){
  res.render('home',{
    title: 'Star Wars Movies',
    movies : moviesJSON.movies
  });
};

// Single Movie
exports.single_movie = function (req, res) {
  var episode_num = req.params.episode_num;
  res.send('This is the page for episode '+ episode_num);
};

// Page Not Found
exports.notFound = function () {
  res.send('Page not found.');
};
