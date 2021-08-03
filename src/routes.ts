import express from 'express';
//middleware
import  validate  from './middleware/request';
//schemas
import * as subscriptionSchema from './schema/subscription';
import * as publicationSchema from './schema/publication';
//controllers
import * as subscriptionController from './controllers/subscription';
import * as publicationController from './controllers/publication';

const router = express.Router();

//default welcome template
router.route('/').get((req, res, next) => {
    res.status(200).json({ message: 'Welcome Aboard Pal' });
    next();
});

 router.route('/subscribe/:topic').post(validate(subscriptionSchema.create), subscriptionController.create).get(subscriptionController.get);
 router.route('/publish/:topic').post(validate(publicationSchema.create), publicationController.create);
 export default router;

