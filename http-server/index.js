const express = require('express');
const app = express();
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

app.use(express.static('http-server'));

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/http-server/registration.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
