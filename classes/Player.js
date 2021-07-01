class Player {
  constructor() {
    this.cards = []
    this.hand = ''
    this.suitsObj = {}
  }
  setCards([...cards]) {
    this.cards = cards
  }
}

export default Player
