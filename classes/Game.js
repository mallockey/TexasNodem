import { getCards, shuffleCards } from '../data/newDeck.js'
import Player from './Player.js'

class Game {
  constructor() {
    this.resetGame()
    this.board = []
    this.boardsHand = []
  }
  resetGame() {
    this.deck = shuffleCards(getCards())
  }
  dealCards() {
    const card1 = this.deck.pop()
    const card2 = this.deck.pop()
    return [card1, card2]
  }
  dealToBoard(numCards) {
    for (let i = 0; i < numCards; i++) {
      this.board.push(this.deck.pop())
    }
  }
}

const game = new Game()
const player1 = new Player()
player1.setHand(game.dealCards())
game.dealToBoard(3)

console.log(player1)
console.log(game.board)

export default Game
