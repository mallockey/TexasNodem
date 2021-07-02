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

export function findBestHand(board, playerHand) {
  const combinedCards = [...board, ...playerHand]
  let suitObj = countNumSuits(combinedCards)

  let flushCards = []
  const pairs = findPairs(combinedCards)
  if (Object.values(suitObj).some((item) => item >= 5)) {
    const flushSuit = Object.keys(suitObj).find((suit) => suitObj[suit] >= 5)
    combinedCards.map((card) => {
      if (card.suit === flushSuit) {
        flushCards.push(card)
      }
    })
    if (findStraight(flushCards)) {
      if (findRoyalFlush(flushCards)) {
        return 'Royal Flush'
      } else {
        return 'Straight Flush'
      }
    } else if (pairs === 'Four of a kind') {
      return '4 of a kind'
    } else {
      return 'Flush'
    }
  } else {
    return 'Not flush'
  }
}

function findRoyalFlush(cards) {
  let royalFlush = [10, 'J', 'Q', 'K', 'A']
  let count = 0

  cards.forEach((card, index) => {
    royalFlush.forEach((royalCard) => {
      if (royalCard === card.cardNoSuit) {
        count++
      }
    })
  })

  if (count === 5) {
    return true
  } else {
    return false
  }
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

  if (countTo5 >= 5) {
    return true
  } else {
    return false
  }
}

function findPairs(cards) {
  const pairMap = {
    2: 'Two',
    3: 'Three',
    4: 'Four',
  }

  const copyOfBoard = cards.map((card) => card.cardNoSuit)

  let tmp = {}
  copyOfBoard.forEach((card) => {
    if (!tmp[card]) {
      tmp[card] = 1
    } else {
      tmp[card] = tmp[card] + 1
    }
  })

  let maxValue = 0
  let twoPairCount = 0
  for (let card in tmp) {
    if (!maxValue) {
      maxValue = tmp[card]
    } else if (tmp[card] > maxValue) {
      maxValue = tmp[card]
    }
    if (tmp[card] === 2) {
      twoPairCount++
    }
  }

  if (twoPairCount === 2 && maxValue < 3) {
    return 'Two pair'
  }

  return maxValue === 1 ? 'No pair' : `${pairMap[maxValue]} of a kind`
}
