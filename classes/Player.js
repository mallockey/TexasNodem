class Player {
  constructor() {
    this.cards = []
    this.hand = ''
  }
  setCards([...cards]) {
    this.cards = cards
  }
  cardsToString(){
    return this.cards.map(card => card.cardString)
  }
}

export default Player
