const { transferNewUsers } = require('./services/transferNewUsers');

async function transferData() {
    try {
        await transferNewUsers();

        console.log('Data transfer complete.');
    } catch (err) {
        console.error('Error during data transfer:', err);
    }
}

transferData();
