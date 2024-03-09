const path = require('path');

module.exports = {
    firebaseKey: path.join(__dirname, '../../serviceAccountKey.json'),
    lastSyncFilename: path.join(__dirname, '../../lastSyncDate.txt'),
};
