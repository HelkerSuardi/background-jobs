import 'dotenv/config';

import { userRegistrationMailQueue } from './src/utils/queuer.js';
import userRegistrationMailJob from './src/jobs/user-registration-mail-job.js';

userRegistrationMailQueue.process(userRegistrationMailJob.handle);
