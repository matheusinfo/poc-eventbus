export class TimeNow {
  constructor(eventBus) {
    this.eventBus = eventBus;
  }

  handle(mail) {
    const timeNow = new Date();

    this.eventBus.emit("send-mail", null, {
      to: mail,
      subject: "TimeNow",
      text: `Now is exact ${timeNow}`,
    });

    this.eventBus.emit("log", null, `TimeNow sended with success to ${mail}!`);

    return `TimeNow sended with success to ${mail}!`;
  }
}
