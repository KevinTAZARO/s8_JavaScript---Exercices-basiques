const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

    console.log("Voici les entrepreneurs nés dans les années 70:");
    entrepreneurs.forEach(entrepreneurs => {
      if (entrepreneurs.year < 1980 && entrepreneurs.year > 1969)
      {
        console.log(entrepreneurs.first + " " + entrepreneurs.last);
      }
    });
    console.log('--------------------- ');
    console.log("");

    console.log('Array avec prénom et nom des entrepreneurs');
    let firstlast = [];
        entrepreneurs.forEach(entrepreneurs => firstlast.push(entrepreneurs.first + " " + entrepreneurs.last));
        console.log(firstlast);
    console.log('--------------------- ');
    console.log("");

    console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
    entrepreneurs.forEach(entrepreneurs => console.log(entrepreneurs.first + " " + entrepreneurs.last + " a " + (2022 - entrepreneurs.year) + "ans aujourd'hui."));
    console.log('--------------------- ');
    console.log("");

    console.log("Trie des entrepreneurs par ordre alphabétique du nom de famille");
    function compare( a, b ) {
        if ( a.last < b.last ){
          return -1;
        }
        if ( a.last > b.last ){
          return 1;
        }
        return 0;
      };
      console.log(entrepreneurs.sort( compare ));