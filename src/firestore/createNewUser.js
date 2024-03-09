const { db, admin } = require('../config/firebaseConfig');

async function createNewUser(email, password, additionalUserInfo) {
    try {
        const userRecord = await admin.auth().createUser({
            email,
            emailVerified: false,
            password,
            disabled: false,
        });

        additionalUserInfo.uid = userRecord.uid;

        await db.collection('users').doc(userRecord.uid).set(additionalUserInfo);

        console.log('Successfully created user and saved additional info in Firestore.');
    } catch (error) {
        console.error('Error creating user or saving to Firestore:', error);
        throw error;
    }
}

module.exports = { createNewUser };
