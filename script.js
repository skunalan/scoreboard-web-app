// Team-Home Name Determination Section
const teamHomeName = document.getElementById("team-home-name");
const teamHomeNameButton = document.getElementById("team-home-name-button");

teamHomeNameButton.addEventListener("click", function() {
  teamHomePrompt = prompt('Lütfen "Ev Sahibi" takımının ismini girin.');

  if(teamHomePrompt === null || teamHomePrompt === "") {
    alert("Lütfen geçerli bir takım ismi girin!");
  } else {
    teamHomeName.innerHTML = teamHomePrompt;
  }
})

// Team-Away Name Determination Section
const teamAwayName = document.getElementById("team-away-name");
const teamAwayNameButton = document.getElementById("team-away-name-button");

teamAwayNameButton.addEventListener("click", function() {
  teamAwayPrompt = prompt('Lütfen "Deplasman" takımının ismini girin.');

  if(teamAwayPrompt === null || teamAwayPrompt === "") {
    alert("Lütfen geçerli bir takım ismi girin!");
  } else {
    teamAwayName.innerHTML = teamAwayPrompt;
  }
})

// Team-Home Score Determination Section
const teamHomeScore = document.getElementById("team-home-score");
let teamHomeScoreChange = Number(teamHomeScore.innerHTML);

const teamHomeGoal = document.getElementById("team-home-goal");
teamHomeGoal.addEventListener("click", function() {
  teamHomeScoreChange++;
  teamHomeScore.innerHTML = teamHomeScoreChange;
})

const teamHomeScorePrompt = document.getElementById("team-home-score-prompt");
teamHomeScorePrompt.addEventListener("click", function() {
  teamHomeScorePromptChange = prompt('Lütfen "Ev Sahibi" takımı için bir skor girin.');

  if (isNaN(teamHomeScorePromptChange)) {
      alert("Lütfen geçerli bir karakter girin!");
  } else if (teamHomeScorePromptChange === null || teamHomeScorePromptChange === "") {
      alert("Lütfen bir skor değeri girin!");
  } else {
    teamHomeScore.innerHTML = teamHomeScorePromptChange;
  }
})

const teamHomeRevert = document.getElementById("team-home-revert");
teamHomeRevert.addEventListener("click", function() {
  teamHomeScoreChange = Number(teamHomeScore.innerHTML);

  if(teamHomeScore.innerHTML > 0 ) {
    teamHomeScoreChange--;
    teamHomeScore.innerHTML = teamHomeScoreChange;
  }
});

// Team-Away Score Determination Section
const teamAwayScore = document.getElementById("team-away-score");
let teamAwayScoreChange = Number(teamAwayScore.innerHTML);

const teamAwayGoal = document.getElementById("team-away-goal");
teamAwayGoal.addEventListener("click", function() {
  teamAwayScoreChange++;
  teamAwayScore.innerHTML = teamAwayScoreChange;
})

const teamAwayScorePrompt = document.getElementById("team-away-score-prompt");
teamAwayScorePrompt.addEventListener("click", function() {
  teamAwayScorePromptChange = prompt('Lütfen "Deplasman" takımı için bir skor girin.');

  if (isNaN(teamAwayScorePromptChange)) {
      alert("Lütfen geçerli bir karakter girin!");
  } else if (teamAwayScorePromptChange === null || teamAwayScorePromptChange === "") {
      alert("Lütfen bir skor değeri girin!");
  } else {
    teamAwayScore.innerHTML = teamAwayScorePromptChange;
  }
})

const teamAwayRevert = document.getElementById("team-away-revert");
teamAwayRevert.addEventListener("click", function() {
  teamAwayScoreChange = Number(teamAwayScore.innerHTML);

  if(teamAwayScore.innerHTML > 0) {
    teamAwayScoreChange--;
    teamAwayScore.innerHTML = teamAwayScoreChange;
  }
});

// Reset-Button Section
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
  resetAlert = prompt("Eğer tüm skorları sıfırlamak istiyorsanız lütfen EVET yazın!");

  if(resetAlert === "EVET") {
    teamHomeScoreChange =0;
    teamHomeScore.innerHTML = teamHomeScoreChange;

    teamAwayScoreChange =0;
    teamAwayScore.innerHTML = teamAwayScoreChange;
  } else {
    alert("Geçerli ifadeyi girmediğinizden skorlar sıfırlanamadı!");
  }
})