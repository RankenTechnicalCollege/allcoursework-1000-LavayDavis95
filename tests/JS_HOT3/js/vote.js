let upvotes = 0;
let downvotes = 0;

function updateDisplay() {
  const totalScore = upvotes - downvotes;
  document.getElementById("upvotes-count").innerText = upvotes;
  document.getElementById("downvotes-count").innerText = downvotes;
  document.getElementById("total-score").innerText = totalScore;
}

    
document.getElementById("upvote-btn").addEventListener("click", function() {
upvotes++;
updateDisplay();
});

document.getElementById("downvote-btn").addEventListener("click", function() {
downvotes++;
updateDisplay();
});