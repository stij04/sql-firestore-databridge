const { getNewUsers } = require("../sql/getNewUsers");
const { createNewUser } = require("../firestore/createNewUser");

async function transferNewUsers() {
    try {
        const newUsers = await getNewUsers();

        let count = 0;
        for (const user of newUsers) {
            if (count === 1) break;
            count++;

            const userEmail = user.UziPrijmeni.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").concat("@example.com");
            const userPassword = user.UziPin.toString();

            await createNewUser(userEmail, userPassword, {
                email: userEmail,
                UziId: user.UziId,
                UziJmeno: user.UziJmeno,
                UziPrijmeni: user.UziPrijmeni,
                UziPrezdivka: user.UziPrezdivka,
                UziPohlavi: user.UziPohlavi,
                UziAvatar: user.UziAvatar,
                UziBody: user.UziBody,
                UziMena: user.UziMena
            });
        }

        console.log('New users transferred.');
    } catch (err) {
        console.error('Error during new users transfer:', err);
    }
}

module.exports = { transferNewUsers };