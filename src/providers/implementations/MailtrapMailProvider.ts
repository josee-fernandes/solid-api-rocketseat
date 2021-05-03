import { IMailProvider, IMessage } from "@providers/IMailProvider";

import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtapMailProvider implements IMailProvider{
  private transporter: Mail

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '1fb9befce72a80',
        pass: 'a4e495ed576200'
      }
    })
  }

  async sendMail(message: IMessage): Promise<void>{
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}