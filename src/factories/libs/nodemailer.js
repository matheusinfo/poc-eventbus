import { NodeMailerAdapter } from "../../adapters/nodemailer-adapter.js";

export const nodeMailerFactory = () => new NodeMailerAdapter();
