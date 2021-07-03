import cardInfo from '../data/cardInfo.js'

function countNumSuits(cards) {
  let numSuitsObj = {}
  cards.forEach((card) => {
    if (numSuitsObj[card['suit']]) {
      numSuitsObj[card['suit']] = numSuitsObj[card['suit']] + 1
    } else {
      numSuitsObj[card['suit']] = 1
    }
  })
  return numSuitsObj
}

function generatePairObject(cards) {

  const copyOfBoard = cards.map((card) => card.cardNoSuit)

  let tmp = {}
  copyOfBoard.forEach((card) => {
    if (!tmp[card]) {
      tmp[card] = 1
    } else {
      tmp[card] = tmp[card] + 1
    }
  })

  return tmp
}

export function findBestHand(board, playerHand) {
  findHighCard(playerHand)
  const combinedCards = [...board, ...playerHand]
  let suitObj = countNumSuits(combinedCards)

  let flushCards = []
  const flushSuit = Object.keys(suitObj).find((suit) => suitObj[suit] >= 5)

  combinedCards.map((card) => {
    if (card.suit === flushSuit) {
      flushCards.push(card)
    }
  })

  const pairsObj = generatePairObject(combinedCards)

  if(flushSuit){
    if (findStraight(flushCards)) {
      if (findRoyalFlush(flushCards)) {
        return 'Royal Flush'
      } else {
        return 'Straight Flush'
      }
    }
    return 'Flush'
  } else if (findPairs(pairsObj) === 'Four of a kind') {
    return '4 of a kind'
  } else if(findFullHouse(pairsObj)) {
    return 'Full House'
  } else if(flushSuit){
    return `Flush of ${flushSuit}`
  } else if(findStraight(combinedCards)){
    return 'Straight'
  } else if(findPairs(pairsObj)) {
    return findPairs(pairsObj)
  } else {
    return findHighCard(playerHand)
  }
}

function findRoyalFlush(cards) {
  let royalFlush = cardInfo.CARDS.slice(8)

  let count = 0

  cards.forEach(card => {
    royalFlush.forEach((royalCard) => {
      if (royalCard === card.cardNoSuit) {
        count++
      }
    })
  })

  return (count === 5 ? true : false)
}

function findStraight(cards) {
  let copyOfCards = ['A', ...cardInfo.CARDS]
  let passedInCards = cards.map((card) => card.cardNoSuit)

  copyOfCards.forEach((card, index) => {
    if (passedInCards.includes(card)) {
      copyOfCards[index] = 'FOUND'
    }
  })

  let countTo5 = 0

  for (let i = copyOfCards.length - 1; i >= 0; i--) {
    if (countTo5 >= 5) {
      break
    }
    if (copyOfCards[i] === 'FOUND') {
      countTo5++
    } else {
      countTo5 = 0
    }
  }

  return (countTo5 >= 5 ? true : false)
}

function findFullHouse(pairObject){

  let count = 0
  for(let card in pairObject){
    if(pairObject[card] === 3){
      count += 3
    }else if(pairObject[card] === 2){
      count += 2
    }
  }

  return (count === 5 ? true : false)
}

function findPairs(pairObject) {

  const pairMap = {
    2: 'Two',
    3: 'Three',
    4: 'Four',
  }

  let maxValue = 0
  let twoPairCount = 0
  for (let card in pairObject) {
    if (!maxValue) {
      maxValue = pairObject[card]
    } else if (pairObject[card] > maxValue) {
      maxValue = pairObject[card]
    }
    if (pairObject[card] === 2) {
      twoPairCount++
    }
  }

  if (twoPairCount >= 2) {
    return 'Two pair'
  }

  return maxValue >= 2 ? `${pairMap[maxValue]} of a kind` : false
}

function findHighCard(cards){
  let copyOfCards = [...cardInfo.CARDS]

  copyOfCards.forEach((boardCard,index) => {
    cards.forEach(card => {
      if(boardCard === card.cardNoSuit){
        copyOfCards[index] = {
          card: boardCard,
          found: true
        }
      }
    })
  })

  let highCard = null
  let i = copyOfCards.length - 1
  while(i >= 0){
    if(copyOfCards[i].found){
      highCard = copyOfCards[i].card
      break
    }
    i--
  }

  return `${highCard} high`

}
