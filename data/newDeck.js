import CARD_INFO from './cardInfo.js'

export function getCards() {
  const suitedCards = []
  CARD_INFO.SUIT_TYPES.forEach((suit) => {
    CARD_INFO.CARDS.forEach((card) => {
      suitedCards.push(`${card}${suit}`)
    })
  })
  return suitedCards
}

export function shuffleCards(deck) {
  let remaingCardsToShuffle = deck.length
  let temp = 0
  let randomNum = 0

  while (remaingCardsToShuffle) {
    randomNum = Math.floor(Math.random() * remaingCardsToShuffle--)
    temp = deck[remaingCardsToShuffle]
    deck[remaingCardsToShuffle] = deck[randomNum]
    deck[randomNum] = temp
  }

  return deck
}
