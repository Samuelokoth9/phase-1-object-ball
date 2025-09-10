// src/00-objectball.js
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// get all players
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// Functions
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

function teamColors(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return game[side].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return Object.values(game[side].players).map((p) => p.number);
    }
  }
}

function playerStats(playerName) {
  return allPlayers()[playerName];
}

function bigShoeRebounds() {
  let players = allPlayers();
  let biggest = null;
  for (let name in players) {
    if (!biggest || players[name].shoe > players[biggest].shoe) {
      biggest = name;
    }
  }
  return players[biggest].rebounds;
}

// Bonus
function mostPointsScored() {
  let players = allPlayers();
  let top = null;
  for (let name in players) {
    if (!top || players[name].points > players[top].points) {
      top = name;
    }
  }
  return top;
}

function winningTeam() {
  const game = gameObject();
  const homePoints = Object.values(game.home.players).reduce(
    (sum, p) => sum + p.points,
    0
  );
  const awayPoints = Object.values(game.away.players).reduce(
    (sum, p) => sum + p.points,
    0
  );
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  let players = allPlayers();
  return Object.keys(players).reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

function doesLongNameStealATon() {
  let longest = playerWithLongestName();
  let players = allPlayers();
  let topStealer = Object.keys(players).reduce((best, current) =>
    players[current].steals > players[best].steals ? current : best
  );
  return longest === topStealer;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon,
  };
}
