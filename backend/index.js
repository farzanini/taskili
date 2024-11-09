const express = require("express");
const app = express();
const PORT = process.env.port || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
