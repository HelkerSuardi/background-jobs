import Queue from 'bull';
import userRegistrationMailJob from '../jobs/user-registration-mail-job.js';

export const userRegistrationMailQueue = new Queue(
  userRegistrationMailJob.key,
  { host: process.env.REDIS_HOST, port: process.env.REDIS_PORT },
);

userRegistrationMailQueue.on('failed', (job) => {
  console.log('Job failed', job.data);
});
