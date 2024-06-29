const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');
app.use( express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/login.html`)
});


app.listen(8000, () => {
  console.log("listening to port 4000");
});
