import { EventBusAdapter } from "../../adapters/eventbus-adapter.js";

export const eventBusFactory = () => new EventBusAdapter();
