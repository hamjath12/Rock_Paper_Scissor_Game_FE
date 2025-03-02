// Custom Confirm Box
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// Custom Prompt Box
const customPrompt = document.getElementById('customPrompt');
const promptSubmit = document.getElementById('promptSubmit');
const promptCancel = document.getElementById('promptCancel');
const promptInput = document.getElementById('promptInput');

// Custom Alert Box
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const alertOk = document.getElementById('alertOk');

// Show custom confirm dialog
customConfirm.style.display = 'flex';

confirmYes.addEventListener('click', () => {
    customConfirm.style.display = 'none';
    showPrompt();
});

confirmNo.addEventListener('click', () => {
    customConfirm.style.display = 'none';
    showAlert("Let's play next time!");
});

// Show custom prompt dialog
function showPrompt() {
    customPrompt.style.display = 'flex';
}

promptSubmit.addEventListener('click', () => {
    const playerChoice = promptInput.value.trim().toLowerCase();
    customPrompt.style.display = 'none';
    playGame(playerChoice);
});

promptCancel.addEventListener('click', () => {
    customPrompt.style.display = 'none';
    showAlert("You changed your mind! Play next time.");
});

// Show custom alert dialog
function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'flex';
}

alertOk.addEventListener('click', () => {
    customAlert.style.display = 'none';
});

// Game Logic
function playGame(playerChoice) {
    if (['rock', 'paper', 'scissor'].includes(playerChoice)) {
        const choices = ['rock', 'paper', 'scissor'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        let result =
            playerChoice === computerChoice
                ? `It's a tie!\nPlayer: ${playerChoice}\nComputer: ${computerChoice}`
                : playerChoice === 'rock' && computerChoice === 'paper'
                ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
                : playerChoice === 'paper' && computerChoice === 'scissor'
                ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
                : playerChoice === 'scissor' && computerChoice === 'rock'
                ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
                : `Player: ${playerChoice}\nComputer: ${computerChoice}\nPlayer wins!`;

        showAlert(result);
        
    } else {
        showAlert("You didn't enter Rock, Paper, or Scissor.");
    }
}
