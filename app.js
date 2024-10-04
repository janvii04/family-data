 const express = require("express");
const app = express();
const port = 1234;
require("./dbconnection").connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
