const postModel = require('../models/post.models')
const generateCaption = require('../services/ai.service')



async function createPostController(req,res) {


    const file = req.file;
    console.log('file: received', file);

    const base64Image = new Buffer.from(file.buffer).toString('base64');

    const caption = await generateCaption(base64Image);
   
    console.log('Generated caption:', caption);

    res.json({
        message: "Post created successfully",
        caption: caption,
        image: file.originalname,
    })
    
    
}


module.exports ={
    createPostController
}