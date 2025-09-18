import { MailtrapClient } from "mailtrap";
import { config } from "dotenv";

config()// env useage enabled

const TOKEN = process.env.MAILTRAP_TOKEN

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};


