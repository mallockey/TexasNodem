import cardInfo from '../data/cardInfo.js'
export function countNumSuits(cards) {
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

export function findFlush(suitBoardObj, playerSuitObj) {
  for (let suit in suitBoardObj) {
    if (suitBoardObj[suit] === 5) {
      return `Flush of ${suit}`
    }
  }

  let tmp = { ...suitBoardObj }
  for (let suit in playerSuitObj) {
    if (tmp[suit]) {
      tmp[suit] = tmp[suit] + playerSuitObj[suit]
    }
  }

  for (let suit in tmp) {
    if (tmp[suit] === 5) {
      return `Flush of ${suit}`
    }
  }

  return 'Not Flush'
}

export function findStraight(board, playerCards) {
  const copyOfCards = ['A', ...cardInfo.CARDS]
  let combinedCards = [...board, ...playerCards]
  combinedCards = combinedCards.map((card) => card.cardNoSuit)

  copyOfCards.forEach((card, index) => {
    if (combinedCards.includes(card)) {
      copyOfCards[index] = 'FOUND'
    }
  })

  let countTo5 = 0
  for (let i = 0; i < copyOfCards.length; i++) {
    if (countTo5 === 5) {
      break
    }
    if (copyOfCards[i] === 'FOUND') {
      countTo5++
    } else {
      countTo5 = 0
    }
  }

  if (countTo5 === 5) {
    return 'Straight!'
  }
}

export function findPairs(board, playerCards) {
  const pairMap = {
    2: 'Two',
    3: 'Three',
    4: 'Four',
  }

  let copyOfBoard = [...board]
  let copyOfPlayercards = [...playerCards]
  copyOfBoard = copyOfBoard.map((card) => card.cardNoSuit)
  copyOfPlayercards = copyOfPlayercards.map((card) => card.cardNoSuit)
  copyOfPlayercards = [...copyOfPlayercards, ...copyOfBoard]
  let tmp = {}
  copyOfPlayercards.forEach((card) => {
    if (!tmp[card]) {
      tmp[card] = 1
    } else {
      tmp[card] = tmp[card] + 1
    }
  })
  let maxValue = 0
  for (let card in tmp) {
    if (!maxValue) {
      maxValue = tmp[card]
    } else if (tmp[card] > maxValue) {
      maxValue = tmp[card]
    }
  }
  console.log(maxValue)
  console.log(tmp)
  return `${pairMap[maxValue]} of a kind`
}
