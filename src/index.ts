import mongoose from 'mongoose'
import dotenv from 'dotenv'

void async function() {
  dotenv.config({
    path: __dirname + '/../.env'
  })
  console.log('connect to mongoDB', process.env.DATABASE_URL)
  const dbClient = await mongoose.connect(process.env.DATABASE_URL)
  console.log('connected!')
  console.log('wait 3s')
  await new Promise(r => setTimeout(r, 3000))
  console.log('disconnect from mongoDB')
  await dbClient.disconnect()
  console.log('disconnected!')
}()