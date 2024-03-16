const { getSeasons } = require("../sql/getSeasons");
const { createSeason } = require("../firestore/createSeason");

const TEST_MODE = true;

async function transferSeasons() {
  try {
    const seasons = await getSeasons();

    let count = 0;
    for (const season of seasons) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createSeason({
        SezId: season.SezId,
        SezNazev: season.SezNazev,
        SezPopis: season.SezPopis,
        SezStart: season.SezStart,
        SezKonec: season.SezKonec,
        SezSkryto: season.SezSkryto,
        SezVytvoril: season.SezVytvoril,
        SezVytvoreno: season.SezVytvoreno,
        SezUpravil: season.SezUpravil,
        SezUpraveno: season.SezUpraveno,
      });
    }

    console.log("Seasons transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during seasons transfer:", err);
  }
}

module.exports = { transferSeasons };
