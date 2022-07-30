import { eventBusFactory } from "./factories/libs/eventbus.js";
import { nodeMailerFactory } from "./factories/libs/nodemailer.js";

const eventBus = eventBusFactory();

eventBus.on("log", function (message) {
  console.log(message);
});

eventBus.on("send-mail", function ({ to, subject, text }) {
  const makeNodeMailer = nodeMailerFactory();

  makeNodeMailer.send({
    to,
    subject,
    text,
  });
});

export default eventBus;
