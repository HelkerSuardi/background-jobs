import { userRegistrationMailQueue } from '../utils/queuer.js';

export default {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    const user = { name, email, password };

    await userRegistrationMailQueue.add({ user }, { delay: 5000 });

    return res.status(201).send(user);
  },
};
