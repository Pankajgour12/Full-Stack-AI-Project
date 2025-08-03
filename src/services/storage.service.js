


// or

const ImageKit = require("imagekit");


const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,

    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadImageToImageKit(file,filename) {
    try {
        const result = await imagekit.upload({
            file: file.buffer.toString('base64'), // Convert buffer to base64 string
            fileName: filename,
            folder: "posts"
        });
        return result;
    } catch (error) {
        console.error("Error uploading image to ImageKit:", error);
        throw error;
    }
}

module.exports = { uploadImageToImageKit };