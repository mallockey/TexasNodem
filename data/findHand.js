import allHands from './typeOfHands.js'

export function findHand(board, hand) {
  allHands.forEach(lookHand => {
    switch(lookHand){
      case 'two_of_a_kind':
        let tmpObj = {}
        board.forEach(card => {
          if(tmpObj[card[0]]){
            tmpObj[card[0]] = tmpObj[card[0]] + 1
          }else{
            tmpObj[card[0]] = 1
          }
        })
        console.log(tmpObj)
        
      break
    }
  })
}
