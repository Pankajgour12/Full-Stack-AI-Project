const express = require('express')


const authMiddleware = require('../middlewares/auth.middleware')
const multer = require ('multer');

const router = express.Router()



const upload = multer({storage: multer.memoryStorage()})


/* POST /api/post [protected]   {image-file} */


router.post('/',
    authMiddleware,   /* req.user = userData */

    upload.single("image"),
    createPostController
)







module.exports = router;