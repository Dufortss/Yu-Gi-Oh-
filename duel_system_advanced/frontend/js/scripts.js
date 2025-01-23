
async function activateCard(cardId) {
    try {
        const response = await fetch('http://localhost:5000/api/activate-card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cardId: cardId,
                playerId: 'player1',
                opponentId: 'player2'
            })
        });

        const result = await response.json();
        if (response.ok) {
            showMessage(result.message, 'success');
        } else {
            showMessage(result.message, 'error');
        }
    } catch (error) {
        console.error("Erro ao ativar a carta:", error);
        showMessage("Erro na comunicação com o servidor.", 'error');
    }
}

function showMessage(message, type = 'success') {
    const messageBox = document.getElementById('message-box');
    messageBox.innerHTML = `<p class="${type}">${message}</p>`;
    setTimeout(() => {
        messageBox.innerHTML = '';
    }, 3000);
}
    