const express = require('express');
const cors = require("cors")
const { stores } = require('./storesData');
const app = express();
const port = 8080; // You can change this to any port you prefer



app.use(express.json())
app.use(cors())

// Define a route that responds with "Hello, World!" when accessed
app.post('/get-stores', (req, res) => {
  res.json({data:stores});
});

app.post('/get-store', (req, res) => {
  res.json({data:stores.filter((store)=>store.id==req.body.id)});
});

app.post('/get-meals', (req, res) => {
  res.send(`all the meals for the : ${req.body.id} `);
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
