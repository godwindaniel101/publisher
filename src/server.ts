import app from './app'
import log from "./config/logger";
import connect from "./config/db";
import { AppError } from './utils/error';
import dotenv from 'dotenv';

process.on('uncaughtException', (err: AppError) => {
  log.info(err);
  process.exit(1);
});

const result = dotenv.config();

if (result.error){dotenv.config({ path: ".env" })};//set config file if not available

connect();
// //connect to db
const port = + process.env.PORT! as number;
const host = process.env.HOST as string;

const server = app.listen(port, () => {
  log.info(`Server listing at http://${host}:${port}`);
});

process.on('unhandledRejection', (err: Error) => {
  log.error(err);
  server.close(() => {
    process.exit(1);
  });
});
