import nodemailer from 'nodemailer';

const mailerConfigs = {
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
};

export default nodemailer.createTransport(mailerConfigs);
