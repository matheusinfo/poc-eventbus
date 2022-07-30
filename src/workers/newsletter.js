import faker from "faker";

export class Newsletter {
  constructor(eventBus) {
    this.eventBus = eventBus;
  }

  handle(mail) {
    const newsLetter = faker.random.words();

    this.eventBus.emit("send-mail", null, {
      to: mail,
      subject: "Newsletter",
      text: newsLetter,
    });

    this.eventBus.emit(
      "log",
      null,
      `Newsletter sended with success to ${mail}!`
    );

    return `Newsletter sended with success to ${mail}!`;
  }
}
