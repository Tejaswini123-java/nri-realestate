import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.warn(
    'MONGODB_URI is not set. Add it to .env.local before submitting any forms. See README.md.'
  )
}

// Cache the connection across hot-reloads in dev and across invocations in serverless.
let cached = global._mongoose
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error(
        'MONGODB_URI is missing. Create a .env.local file with your MongoDB connection string (see README.md).'
      )
    }
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
