const startContainer = document.getElementById("start-container");
const gameContainer = document.getElementById("game-container");
const rollDiceButton = document.getElementById("roll-dice");
const backButton = document.getElementById("back-button");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const resultDiv = document.getElementById("result");

document.getElementById("start-game").addEventListener("click", () => {
    startContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    rollDiceButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    
    // Başlangıçta zarları görünür yap
    dice1.classList.remove("hidden");
    dice2.classList.remove("hidden");
    dice1.textContent = '';
    dice2.textContent = '';
});

rollDiceButton.addEventListener("click", () => {
    // Zarları animasyonlu hale getir
    dice1.classList.add("animate");
    dice2.classList.add("animate");
    dice1.classList.remove("no-animation");
    dice2.classList.remove("no-animation");
    dice1.textContent = '';
    dice2.textContent = '';
    
    setTimeout(() => {
        const result1 = rollDice();
        const result2 = rollDice();
        
        // Zarların sonuçlarını güncelle
        dice1.textContent = result1;
        dice2.textContent = result2;
        
        // Animasyonu kaldır ve zarları sadece sayı ile göster
        dice1.classList.remove("animate");
        dice2.classList.remove("animate");
        dice1.classList.add("no-animation");
        dice2.classList.add("no-animation");
        
        resultDiv.textContent = `ZAR 1: ${result1}, ZAR 2: ${result2}, TOPLAM: ${result1 + result2}`;
    }, 4000); // Atış süresi kadar 4 saniye bekle
});

backButton.addEventListener("click", () => {
    startContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    backButton.classList.add("hidden");
    resultDiv.textContent = ''; // Sonucu temizle
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
