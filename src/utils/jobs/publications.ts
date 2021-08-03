import { Job } from "bull";
import axios from 'axios';
import log from "../../config/logger";


const publication = async (job: Job) => {
   let {data} = job.data;

   let subscribers = data;

   for (let i = 0; i < subscribers.length; i++) { 
     
    let data = job.data.message;

    let url = subscribers[i]['url']

    data['topic'] = subscribers[i]['topic']
    

    console.log('calling endpoint' , url);
    try{

      await axios.post(url , data)

      console.log('endpoint called');


    }catch(err){

      log.error(err);
      
    }
  }

};

export default publication;