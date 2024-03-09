const { db } = require('../config/firebaseConfig');

async function getExistingUsers() {
    try {
        const usersSnapshot = await db.collection('users').get();
        const usersList = [];
        usersSnapshot.forEach(doc => {
            usersList.push({ id: doc.id, ...doc.data() });
        });
        console.log('Successfully fetched all users.');
        return usersList;
    } catch (error) {
        console.error('Error fetching users from Firestore:', error);
        throw error;
    }
}

module.exports = { getExistingUsers };
