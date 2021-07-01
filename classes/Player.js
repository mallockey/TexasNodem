class Player {
  constructor() {
    this.hand = []
  }
  setHand([...cards]) {
    this.hand = cards
  }
}

export default Player
