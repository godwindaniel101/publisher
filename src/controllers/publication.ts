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
    message['topic'] = topic

      const subscribers =  await Subscription.find({topic}) as [SubscriptionDocument] ;

          for (let i = 0; i < subscribers.length; i++) { 
     
            let url = subscribers[i]['url'] 

           await sendPublication(url , message);
     
          }
           res.status(201).json({message : 'sending ' +subscribers.length + ' publication'});

})
