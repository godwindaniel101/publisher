import mongoose from "mongoose";
import log from "./logger";

async function connect() {
  const db = process.env.DB as string;
  const db_port = process.env.DB_PORT as string;
  const db_host = process.env.DB_HOST as string;
  const db_url = `mongodb://${db_host}:${db_port}/${db}`;

  console.log(db_url);
  return mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("Database Error", error);
    });
}

export default connect;
