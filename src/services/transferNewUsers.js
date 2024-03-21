const { getNewUsers } = require("../sql/getNewUsers");
const { createNewUser } = require("../firestore/createNewUser");

const TEST_MODE = true;

async function transferNewUsers() {
  try {
    const newUsers = await getNewUsers();

    let count = 0;
    for (const user of newUsers) {
      if (TEST_MODE && count === 1) break;
      count++;

      const userEmail = user.UziPrijmeni.toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .concat("@example.com");
      const userPassword = user.UziPin.toString();

      await createNewUser(userEmail, userPassword, {
        email: userEmail,
        UziId: user.UziId,
        UziJmeno: user.UziJmeno,
        UziPrijmeni: user.UziPrijmeni,
        display_name: user.UziPrezdivka,
        UziPohlavi: user.UziPohlavi,
        photo_url: user.UziAvatar,
        UziBody: user.UziBody,
        UziMena: user.UziMena,
        created_time: user.UziVytvoreno,
        UziUpraveno: user.UziUpraveno,
      });
    }

    console.log("New users transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during new users transfer:", err);
  }
}

module.exports = { transferNewUsers };
