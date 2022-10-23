import mongoose from "mongoose";

const Connection = async (db_url) => {
  const DB_URL = db_url;
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlparser: true,
      // useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("database comnnected succesfully");
  } catch (error) {
    console.log("error while connecting to database", error.message);
  }
};

export default Connection;
