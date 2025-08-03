const postModel = require('../models/post.models')
const generateCaption = require('../services/ai.service')

const { uploadImageToImageKit } = require('../services/storage.service')    
const {v4: uuidv4} = require('uuid')

async function createPostController(req,res) {


    const file = req.file;
    console.log('file: received', file);

    const base64Image = new Buffer.from(file.buffer).toString('base64');

    const caption = await generateCaption(base64Image);
 const uploadResult = await uploadImageToImageKit(file, `${uuidv4()}`);

const post = await postModel.create({
    caption: caption,
    imageUrl: uploadResult.url,
   image: console.log(uploadResult.url),
    userId: req.user._id, // Assuming you have user info in req.user
});

    console.log('Post created:', post);

    // Optionally, you can also return the post object in the response
    res.status(201).json({
        message: "Post created successfully",
        post: {
            id: post._id,
            caption: post.caption,
            imageUrl: post.imageUrl,
            
        },
})
    

    res.json({
        message: "Post created successfully",
        caption: caption,
        uploadResult: uploadResult,
    })
    
    
}


module.exports ={
    createPostController
}