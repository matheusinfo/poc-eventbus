export class IsMonday {
  constructor(eventBus) {
    this.eventBus = eventBus;
  }

  handle(mail) {
    const timeNow = new Date().getDay();
    const isMonday =
      timeNow === 1 ? "Today is monday :(" : "Today is not monday :)";

    this.eventBus.emit("send-mail", null, {
      to: mail,
      subject: "IsMonday?",
      text: isMonday,
    });

    this.eventBus.emit(
      "log",
      null,
      `IsMonday? sended with success to ${mail}!`
    );

    return `IsMonday? sended with success to ${mail}!`;
  }
}
