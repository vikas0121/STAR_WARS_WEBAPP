var express = require('express');
var routes = require('./routes');
var path = require('path');
var app = express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Routes

//home
app.get('/', routes.home);
// single_movie
app.get('/star_wars_episode/:episode_num?', routes.single_movie);
// Not Found
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log('The application is running at localhost: 3000');
})
