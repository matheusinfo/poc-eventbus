import "dotenv/config";
import nodemailer from "nodemailer";

export class NodeMailerAdapter {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  send({ to, subject, text }) {
    return this.transporter.sendMail({
      to,
      subject,
      text,
    });
  }
}
