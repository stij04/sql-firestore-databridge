const { getNotifications } = require("../sql/getNotifications");
const { createNotification } = require("../firestore/createNotification");

const TEST_MODE = true;

async function transferNotifications() {
  try {
    const notifications = await getNotifications();

    let count = 0;
    for (const notification of notifications) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createNotification({
        NotId: notification.NotId,
        NotUziId: notification.NotUziId,
        NotUroId: notification.NotUroId,
        NotPrecteno: notification.NotPrecteno,
        NotVytvoreno: notification.NotVytvoreno,
        NotUpraveno: notification.NotUpraveno,
      });
    }

    console.log("Notifications transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during notifications transfer:", err);
  }
}

module.exports = { transferNotifications };
