const express = require("express");
const port = 3000;
const app = express();
const _member_router = require("./router/member_router");
const _fitdo_router = require("./router/fitdo_router");
const _follow_router = require("./router/follow_router");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/member", _member_router);

app.use("/fitdo", _fitdo_router);

app.use("/follow", _follow_router);

app.use("/", (req, res) => {
  res.status(404).send();
});

app.listen(port, () => {
  console.log(`[INFO] Start server : PORT : ${port}`);
});
