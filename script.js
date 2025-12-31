// Simple confetti effect
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

document.getElementById('confetti-btn').addEventListener('click', createConfetti);

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        top: -10px;
        animation: fall 3s linear infinite;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
