const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./router/auth.routes')
const fileRouter = require('./router/file.routes')
const corsMiddleware = require('./middleware/cors.middleware')

const app = express();
const PORT = config.get('serverPort')
app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'))

    app.listen(PORT, () => {
      console.log('server start on: ', PORT)
    })
  } catch (e) {
    
  }
}

start()