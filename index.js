const HEARTS = '\u2661'
const DIAMONDS = '\u2662'
const SPADES = '\u2664'
const CLUBS = '\u2667'
const MAX_NUMBER_OF_CARDS = 52
const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const SUIT_TYPES = [HEARTS, DIAMONDS, SPADES, CLUBS]

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getCard() {
  return shuffledCards.pop()
}

function shuffleCards(array) {
  let remaingCardsToShuffle = array.length
  let temp = 0
  let randomNum = 0

  while (remaingCardsToShuffle) {
    randomNum = Math.floor(Math.random() * remaingCardsToShuffle--)
    temp = array[remaingCardsToShuffle]
    array[remaingCardsToShuffle] = array[randomNum]
    array[randomNum] = temp
  }

  return array
}

const suitedCards = []
SUIT_TYPES.forEach((suit) => {
  CARDS.forEach((card) => {
    suitedCards.push(`${card}${suit}`)
  })
})

const shuffledCards = shuffleCards(suitedCards)
