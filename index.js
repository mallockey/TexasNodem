import Game from './classes/Game.js'
import Player from './classes/Player.js'

import prompt from 'prompt-sync'
const usePrompt = prompt()


 function startGame(){
  const game = new Game()
  const player1 = new Player()
  const player2 = new Player()

  game.resetGame()
  game.dealToBoard(3)

  player1.setCards(game.dealCards())
  player2.setCards(game.dealCards())


  for(let i = 0; i < 3; i++){
    console.clear()

    console.log('==========Board=================')
    console.log(game.cardsToString())
    console.log('================================')
    player1.hand = game.findHand(player1.cards)
    player2.hand = game.findHand(player2.cards)

    game.dealToBoard(1)

    console.log('Player 1:', player1.cardsToString(), `${player1.hand}`)
    console.log('Player 2:', player2.cardsToString(), `${player2.hand}`)
    console.log('====================')
    if(i === 2){
      usePrompt("Play again? ")
    }else{
      usePrompt("Next card? ")

    }
    console.clear()
  }



}
console.clear()
console.log("=====================================")
console.log("=====      Texas Nodem        =======")
console.log("=====================================")
console.log("\n")
usePrompt("Press enter ")
startGame()
startGame()
startGame()
