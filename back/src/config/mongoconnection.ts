import dotenv from 'dotenv';
dotenv.config();
import mongoose, { ConnectOptions } from 'mongoose';

const CONNECTION_URL = `${process.env.MONGO_FULL_URL}`;

type ConnectionOptionsExtend = {
  useNewUrlParser: boolean
  useUnifiedTopology: boolean
}

const options: ConnectOptions & ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(CONNECTION_URL, options)

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', (error: any) => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})


