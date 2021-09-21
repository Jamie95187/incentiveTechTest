// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code

const printPlayers = () => {
  var counter = 1;
  const listOfPlayers = data.getPlayers();
  for (const player of listOfPlayers) {
    console.log(`PLAYER ${counter}`);
    console.log(`NAME: ${player.name}`);
    console.log(`LASTNAME: ${player.lastname}`);
    console.log(`POSITION: ${player.position}`);
    counter++;
  }
}
printPlayers();

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

const printAlphabetically = () => {
  const sortedListOfPlayers = data.getPlayers().sort((a ,b) => {
    if (a.name.length < b.name.length) {
      return 1;
    }
    if (a.name.length > b.name.length) {
      return -1;
    }
    return 0;
  });
  for (const player of sortedListOfPlayers) {
    console.log(`Name: ${player.name}`);
  }
}
printAlphabetically();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.19
 */

// Your code

const averageGoalsPerGame = (team = data.getPlayers()) => {
  var totalScoreChance = 0;
  team.map(player => {
    totalScoreChance += parseInt(player.scoringChance)/100;
  })
  return totalScoreChance;
}

console.log("Goals per match: " + averageGoalsPerGame());

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

const printPlayerPosition = (targetPlayer) => {
  found = false;
  data.getPlayers().forEach(player => {
      if (player.name == targetPlayer) {
        found = true;
        console.log(player.position);
      }
    }
  )
  if (found == false) {
    console.log("Player not in database");
  }
}

printPlayerPosition("Florin");

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const splitIntoTeams = () => {
  var number = 9;
  var counterA = 0;
  var counterB = 0;
  teamA = [];
  teamB = [];
  while (number > -1) {
    index = Math.round(Math.random() * number)
    if (number % 2 == 0) {
      teamA.push(data.getPlayers().splice(index, 1)[0]);
      counterA++;
    } else {
      teamB.push(data.getPlayers().splice(index, 1)[0]);
      counterB++;
    }
    number--;
  }
  console.log(`Team A has ${teamA.length} players, with an average goal rate of ${Math.round(averageGoalsPerGame(teamA))} goal(s) per match`);
  console.log(`Team B has ${teamB.length} players, with an average goal rate of ${Math.round(averageGoalsPerGame(teamB))} goal(s) per match`);
}

splitIntoTeams();
