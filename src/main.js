import "dotenv/config";
import express from "express";
import { TimeNow } from "./workers/timenow.js";
import { IsMonday } from "./workers/ismonday.js";
import { Newsletter } from "./workers/newsletter.js";
import eventBus from "./eventbus.js";

const app = express();

app.get("/newsletter/:mail", function (req, res) {
  const handleNewsletter = new Newsletter(eventBus);
  res.send(handleNewsletter.handle(req.params.mail));
});

app.get("/timenow/:mail", function (req, res) {
  const handleTimeNow = new TimeNow(eventBus);
  res.send(handleTimeNow.handle(req.params.mail));
});

app.get("/ismonday/:mail", function (req, res) {
  const handleIsMonday = new IsMonday(eventBus);
  res.send(handleIsMonday.handle(req.params.mail));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
