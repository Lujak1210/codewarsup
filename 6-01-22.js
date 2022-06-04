// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17


// readable 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }


// Beast mode!!!!!

const goals = (...a) => a.reduce((s, v) => s + v, 0);

// Computer speak 10111010100011


const goals = (a,b,c) => a + b + c;