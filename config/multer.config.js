const multer = require('multer')
const firebaseStorage = require('multer-firebase-storage')
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-b785c-firebase-adminsdk-fbsvc-a78939d10d.json');
const storage = firebaseStorage({
   credentials: firebase.credential.cert(serviceAccount),
   bucketName: 'drive-b785c.firebasestorage.app',
    unique:true
})
 
const upload = multer({
    storage: storage
})

module.exports = upload;