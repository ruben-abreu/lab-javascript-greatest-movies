// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const uniqueDirectors = [];
  for (const director of moviesArray) {
    if (!uniqueDirectors.includes(director)) {
      uniqueDirectors.push(director);
    }
  }
  return uniqueDirectors.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const spielbergDrama = moviesArray.filter(dramas => {
    return (
      dramas.director === 'Steven Spielberg' && dramas.genre.includes('Drama')
    );
  });
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scores = moviesArray.reduce(function (acc, movie) {
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc + 0;
    }
  }, 0);

  const average = scores / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter(movie => {
    return movie.genre.includes('Drama');
  });
  if (dramas.length === 0) {
    return 0;
  }

  let scores = 0;
  dramas.forEach(dramaScore => {
    scores += dramaScore.score;
  });

  const dramaAverage = scores / dramas.length;
  return Math.round(dramaAverage * 100) / 100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const sortedByYear = [...moviesArray];

  sortedByYear.sort((a, b) => a.year - b.year);

  sortedByYear.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    }
  });

  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const orderedAlpha = [...moviesArray];

  const justTitles = orderedAlpha.map(title => title.title);

  justTitles.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  if (justTitles.length > 20) {
    justTitles.length = 20;
  }

  return justTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const newArray = movies.map(movie => {
    const hours = parseInt(movie.duration.slice(0, 1)) * 60;

    let minutes = 0;
    if (movie.duration.length > 3) {
      minutes = parseInt(movie.duration.slice(3, 5));
    } else if (movie.duration.length < 3) {
      minutes = 0;
    }
    const durationInMinutes = hours + minutes;

    return {
      ...movie,
      duration: durationInMinutes,
    };
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

/* which year has the best average score.
Find which year has the best average score
for the movies released that year! 
Create bestYearAvg() function that receives an array of movies 
and gives us an answer to which year was the best year for cinema 
and what was its average score. 
The bestYearAvg() should return a string with the following structure:
The best year was <YEAR> with an average score of <RATE> */

function bestYearAvg(moviesArray) {
  if (moviesArray.length == 0) {
    return null;
  }
}
