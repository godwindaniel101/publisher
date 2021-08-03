import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import routes from "./routes";
import {globalError, AppError , } from '../src/utils/error';
import * as rateLimiter from  '../src/middleware/rateLimiter';

const app = express();
app.use(express.json());//Body parser, reading data from body to req.body
app.use(helmet());//Helmet helps you secure your Express apps by setting various HTTP headers
app.use(mongoSanitize());// sanitizes user-supplied data to prevent MongoDB Operator Injection
app.use(express.urlencoded({ extended: false }));
app.use('/', rateLimiter.app , routes );//rate limiter limits the number of calls ade to the valid api route

//undefined routes
app.all("*", (req, res, next) => {next(new AppError(`Can't find ${req.originalUrl} on server !` , 404));});
app.use(globalError);
//Global Error Handler
export default app;