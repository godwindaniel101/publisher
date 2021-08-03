import { Request, Response } from 'express';
import asyncError from '../utils/error/asyncError';
import Subscription from '../model/subscription'
import {PublicationDocument} from '../utils/types/publication'
import {sendPublication} from '../config/queue'
import { SubscriptionDocument } from '../utils/types/subscription';


//  Create Subscription
export const create = asyncError(async (req: Request, res: Response) => {

    let topic = req.params.topic;  
    let message = req.body.key;

      const subscribers =  await Subscription.find({topic}) as [SubscriptionDocument] ;

          sendPublication(subscribers , message);//send to subscribers with same topic subscription

        res.status(201).json({
            subscribers
        });
})
