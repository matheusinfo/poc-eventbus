import EventBus from "js-event-bus";

export class EventBusAdapter {
  constructor() {
    this.eventBus = new EventBus();
  }

  on(event, callback) {
    this.eventBus.on(event, callback);
  }

  emit(event, context, args) {
    this.eventBus.emit(event, context, args);
  }
}
