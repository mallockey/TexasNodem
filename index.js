import Game from './classes/Game.js'
import Player from './classes/Player.js'

const game = new Game()
const player1 = new Player()

game.resetGame()
game.dealToBoard(10)

player1.setCards(game.dealCards())

player1.hand = game.findHand(player1.cards)

console.log(player1.cards)
console.log(game.board)
console.log(player1.hand)
