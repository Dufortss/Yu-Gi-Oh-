
const Card = require('../models/Card');
const Player = require('../models/Player');

async function activateCard(req, res) {
    try {
        const { cardId, playerId, opponentId } = req.body;

        const card = await Card.findById(cardId);
        if (!card) return res.status(404).json({ message: "Carta não encontrada." });

        const player = await Player.findById(playerId);
        const opponent = await Player.findById(opponentId);
        if (!player || !opponent) return res.status(404).json({ message: "Jogador ou oponente não encontrados." });

        const effectFunction = effects[card.effectScript];
        if (effectFunction) {
            await effectFunction(player, opponent, card);
            res.status(200).json({ message: `Efeito da carta '${card.name}' ativado.` });
        } else {
            res.status(500).json({ message: "Script de efeito não encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: "Erro ao ativar carta.", error: err.message });
    }
}

const effects = {
    drawTwoCards: async (player, opponent, card) => {
        if (player.deck.length >= 2) {
            const drawnCards = player.deck.splice(0, 2);
            console.log(`Jogador puxou as cartas: ${drawnCards.map(c => c.name).join(', ')}`);
        }
    },
};

module.exports = { activateCard };
    