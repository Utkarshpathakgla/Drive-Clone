const Firebase = require('firebase-admin')
const serviceAccount = require('../drive-b785c-firebase-adminsdk-fbsvc-a78939d10d.json')
const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-b785c.firebasestorage.app'
})

module.exports = Firebase;