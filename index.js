const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("Nechta serial kurdingiz", "");
    while (
      seriesDB.count == null ||
      seriesDB.count == "" ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial kurdingiz", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi kurgan serialingiz", ""),
        b = +prompt("Nechchi baxo berasiz", "");

      if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial kuribsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
      console.log("Siz klassik tomoshabin ekansiz");
    } else if (seriesDB.count > 11) {
      console.log("Serial kup kurgansiz");
    } else {
      console.log("error");
    }
  },
  showDb: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  writeGenres: function () {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Yaxshi kurgan janringiz ${i + 1}`, "");
      if (genre == "" || genre == null) {
        console.log("Siz tanlamadingiz");
        i--;
      } else {
        seriesDB.genres[i] = genre;
      }
    }
    seriesDB.genres.forEach((item, idx) => {
      console.log(`Yaxshi ko'rgan janringiz ${idx + 1} va nomi ${item}`);
    });
  },
};
seriesDB.start();
