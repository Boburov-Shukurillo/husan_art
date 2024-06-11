const express = require("express");
const connectdb = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config();
connectdb();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/travel", require("./routes/travel_route"));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
