import { Request, Response } from 'express';
import asyncError from '../utils/error/asyncError';
import Subscription from '../model/subscription';
import {SubscriptionDocument} from '../utils/types/subscription'


//  Create Subscription
export const create = asyncError(async (req: Request, res: Response) => {

    let data = req.body as SubscriptionDocument;  

    data.topic = req.params.topic;//bcollect topic from id

        await Subscription.create(data);

        res.status(201).json({
            topic:data.topic,
            url:data.url
        });
})
//  Create Subscription
export const get = asyncError(async (req: Request, res: Response) => {

    let topic = req.params.topic;  
    let message = req.body.message;
      const subscribers =  await Subscription.find({topic}) as [SubscriptionDocument] ;
        res.status(201).json({
            subscribers
        });
})