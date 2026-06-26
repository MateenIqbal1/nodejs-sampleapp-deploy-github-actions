const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("Request received");

  res.json({
    message: "Hey Hello i am node js in container , just learning first steps of implementation"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});