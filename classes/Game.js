import { getCards, shuffleCards } from '../data/newDeck.js'
import { findBestHand } from '../functions/findHands.js'
class Game {
  constructor() {
    this.resetGame()
    this.board = []
    this.boardsHand = ''
    this.suitsObj = {}
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
  findHand(playerHand) {
    return findBestHand(this.board, playerHand)
  }
}

export default Game
