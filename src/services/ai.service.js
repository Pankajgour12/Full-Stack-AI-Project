const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },

    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,

    config: {
      systemInstruction: `
You are a helpful AI assistant that generates captions for images.
 you should generate a short and descriptive caption for the image provided.  
The caption should be short and concise and relevant to the content of the image.  
you use hash tags and emojis to make the caption more engaging and relevant to the content of the image.
    `,
    },
  });
  return response.text;
}

module.exports = generateCaption;
