const admin = require('firebase-admin');
const { firebaseKey } = require('./index');

admin.initializeApp({
    credential: admin.credential.cert(require(firebaseKey)),
});

const db = admin.firestore();

module.exports = { admin, db };
