const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./router/auth.routes')
const fileRouter = require('./router/file.routes')
const fileUpload = require('express-fileupload')
const corsMiddleware = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')
const app = express();
const PORT = process.env.PORT || config.get('serverPort')
app.use(corsMiddleware)
app.use(express.json())
app.use(fileUpload({}))
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
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