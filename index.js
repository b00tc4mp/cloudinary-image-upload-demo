require('dotenv').config()

const fs = require('fs')
const cloudinary = require('cloudinary').v2

const { env: { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } } = process

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})


const upload = cloudinary.uploader.upload_stream(/*{
    public_id: 'my-images/my-smiley' // OPTION
},*/ (error, result) => {
        if (error) throw error

        console.log(result)
    })

fs.createReadStream('./smiley.png')
    .pipe(upload)