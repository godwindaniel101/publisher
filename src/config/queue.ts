import Bull from 'bull';
import publication from '../utils/jobs/publications'
import {setQueues, BullAdapter} from 'bull-board';
import { SubscriptionDocument } from '../utils/types/subscription';

// https://optimalbits.github.io/bull

export const sendPublication = async (data:[SubscriptionDocument], message:string) => {

const publicationQueue = new Bull('publish', {redis: process.env.REDIS_URL});

setQueues([new BullAdapter(publicationQueue)]);

await publicationQueue.process(publication);

 publicationQueue.add({ data , message }, {attempts: 2});

 return true;

};

