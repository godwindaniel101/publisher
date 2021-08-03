import { DoneCallback, Job } from "bull";
import axios from 'axios';
import log from "../../config/logger";


const publication = async (job: Job, done : DoneCallback) => {

  try{
  await axios.post(job.data.url , job.data.message)
  }catch(e){
    log.error(e)
  }

};

export default publication;