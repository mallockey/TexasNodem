import Game from "./classes/Game.js";
import Player from "./classes/Player.js";

const game = new Game()
const player1 = new Player()
player1.setHand(game.dealCards())
game.dealToBoard(3)
console.log(game.board)


