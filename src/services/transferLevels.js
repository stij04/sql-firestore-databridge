const { getLevels } = require("../sql/getLevels");
const { createLevel } = require("../firestore/createLevel");

const TEST_MODE = true;

async function transferLevels() {
  try {
    const levels = await getLevels();

    let count = 0;
    for (const level of levels) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createLevel({
        UroId: level.UroId,
        UroSezId: level.UroSezId,
        UroNazev: level.UroNazev,
        UroPoradi: level.UroPoradi,
        UroPopis: level.UroPopis,
        UroHranice: level.UroHranice,
        UroMena: level.UroMena,
        UroVytvoreno: level.UroVytvoreno,
        UroUpraveno: level.UroUpraveno,
      });
    }

    console.log("Levels transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during levels transfer:", err);
  }
}

module.exports = { transferLevels };
