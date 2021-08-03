import Bull from 'bull';
import publication from '../utils/jobs/publications'
import {setQueues, BullAdapter} from 'bull-board';
import log from './logger';
import { SubscriptionDocument } from '../utils/types/subscription';

// https://optimalbits.github.io/bull

export const sendPublication = async (url:string, message:any) => {
    
        const publicationQueue = new Bull('publish', {redis: process.env.REDIS_URL});

        setQueues([new BullAdapter(publicationQueue)]);

         publicationQueue.process(publication);

         publicationQueue.add({ url , message }, {attempts: 1});

};

