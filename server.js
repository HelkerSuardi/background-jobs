import 'dotenv/config';
import express from 'express';

import userController from './src/controller/user-controller.js';

const app = express();
app.use(express.json());

app.post('/user', userController.createUser);

app.listen(3333, () => { console.log('Server running on 3333'); });
