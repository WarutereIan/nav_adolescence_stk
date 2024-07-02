import { connect } from "mongoose";
import { config } from "./config";

export const connectDB = async () => {
  console.log(`- - -`.repeat(10));
  try {
    const options = {
      connectTimeoutMS: 60000,
      socketTimeoutMS: 60000,
    };
    const db = await connect(config.MONGO_URI, options);
    console.log("Connected to MongoDb :) ✅✅✅");
    console.log(`- - -`.repeat(10));
    return db;
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

/*
    export const createRedisClient = async ()=>{
        try{
            const RedisClient = new Redis()
            console.log('Connected to Redis ♦️🔴️ ♦️🔴️ ♦️🔴️')
            return RedisClient
        }catch (err: any) {
            console.error(err.message)
            process.exit(1)
        }
        
    }*/

/*
    export const connectRedis = async () =>{
        try{
          await  RedisClient.connect().then(()=>{
            console.log('Connected to RedisDb :) ♦️🔴️♦️🔴️♦️🔴️♦️🔴️')
            console.log(`- - -`.repeat(5))
        }) 
    }
        catch (err: any) {
            console.error(err.message)
            process.exit(1)
        }
    }*/
