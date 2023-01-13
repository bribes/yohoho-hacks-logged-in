/* This code is copyright of Faav © */
const sessionId = localStorage.sessionId; // get session id to use the api
const coinsSet = prompt("Set your coins to:"); // get coins to set to
const apiURL = (endpoint) => `https://s.${location.hostname}/${endpoint}?s=${sessionId}`;
var userStats = {
    "gamesStarted": 0,
    "coinsOwned": 0,
    "playerSkin": 0,
    "playerPet": 0,
    "playerXP": 0,
    "unlockedSkins": [1],
    "unlockedPets": [1],
    "playerPetLevel": 1,
    "lastGameTime": 0,
    "lastKills": 0,
    "lastScore": 0,
    "totalGameTime": 0,
    "totalKills": 0,
    "totalScore": 0,
    "totalWins": 0,
    "bestGameTime": 0,
    "bestKills": 0,
    "bestScore": 0,
    "abBotSkillLevel": 1
}; // default stats
const userStatsAPI = await fetch(apiURL("login")); // get user stats
const userStatsStatus = userStatsAPI.status;
if (userStatsStatus == 200) userStats = JSON.parse('{'+(await userStatsAPI.text()).split('{')[1]); // set correct user stats

userStats.coinsOwned = Number(coinsSet); // set coins

fetch(apiURL("save"), {method: "POST", body: JSON.stringify(userStats)}); // save to account
location.reload(); // reload page to get changes into effect
/* This code is copyright of Faav © */
