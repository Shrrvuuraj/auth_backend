import mongoose from "mongoose";

export const connectDb= async () => {
     try {
          const connection=await mongoose.connect(process.env.MONGO_URI)
          console.log(`mongodb coneected : ${connection.connection.host}`)
     } catch (error) {
          console.log(`error:${error.message}`)
          process.exit(1)
     }
     
}