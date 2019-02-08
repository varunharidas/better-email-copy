const express = require('express');
const os = require('os');

const app = express();
// Serve the static files from the React app
app.use(express.static('dist'));

// serve emails content

app.get('/api/hello', (req, res) => res.json([
  {
  id: 1,
  title: "Hiccup",
  copy: 'hiccup',
  logo:'/logo'
}, {
  id: 2,
  title: "King Arthur",
  copy: 'king-arthur',
  logo:'/logo'
}])
);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});



app.listen(8080, () => console.log('Listening on port 8080!'));
