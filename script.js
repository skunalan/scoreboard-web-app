// Team Name Determination Section
const teamHomeName = document.getElementById("team-home-name");
const teamHomeNameButton = document.getElementById("team-home-name-button");

teamHomeNameButton.addEventListener("click", function() {
  teamHomeName.innerHTML = prompt('Lütfen "Ev Sahibi" takımın ismini girin.');
})

const teamAwayName = document.getElementById("team-away-name");
const teamAwayNameButton = document.getElementById("team-away-name-button");

teamAwayNameButton.addEventListener("click", function() {
  teamAwayName.innerHTML = prompt('Lütfen "Deplasman" takımın ismini girin.');
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
  teamHomeScorePromptChange = prompt('Lütfen "Ev Sahibi" takım için bir skor girin.');

  if (isNaN(teamHomeScorePromptChange)) {
      alert("Lütfen geçerli karakter giriniz");
  } else if (teamHomeScorePromptChange === null || teamHomeScorePromptChange === "") {
      alert("Lütfen bir skor değeri giriniz");
  } else {
    teamHomeScore.innerHTML = teamHomeScorePromptChange;
  }
})

const teamHomeRevert = document.getElementById("team-home-revert");
teamHomeRevert.addEventListener("click", function() {
  if(teamHomeScore.innerHTML >= 1) {
    teamHomeScoreChange--;
    teamHomeScore.innerHTML = teamHomeScoreChange;
  }
});