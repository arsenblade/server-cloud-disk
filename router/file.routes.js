const Router = require('express')
const fileController = require('../controllers/fileController')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')

router.post('', authMiddleware, fileController.createDir)
router.get('', authMiddleware, fileController.getFiles)

module.exports = router