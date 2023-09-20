import mailer from '../utils/mailer.js';

export default {
  key: 'UserRegistrationMail',
  async handle({ data }) {
    const { name, email } = data.user;
    await mailer.sendMail({
      from: 'Testing queue <queue@email.com>',
      to: `${name} <${email}>`,
      subject: 'Welcome',
      html: '<p> Welcome to our platform </p>'
    })
  },
};
