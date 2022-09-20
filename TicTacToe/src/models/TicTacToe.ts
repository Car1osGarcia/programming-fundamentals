import { Board } from './Board';
import { Input, UserInput } from './Input';
import Player from './Player';

type Move = {
  player: Player;
  move: number;
  value: number;
};

export default class TicTacToe {
  private history: Move[] = [];
  private endMessage: string = "";
  private board: Board;
  private players!: [Player, Player];

  constructor() {
    this.board = new Board(3, 3);
  }
  // [[0,1,2], [0,1,2], [0,1,2]]
  // fila, columna
  //   0   1   2
  // 0 1 | 2 | 3
  // 1 4 | 5 | 6
  // 2 7 | 8 | 9
  private checkEndOfGameByWinning2(simbol: number): boolean {
    let vBoard: number[][] = this.board.getBoard();
    //
    if (
      vBoard[0][0] == simbol &&
      vBoard[0][1] == simbol &&
      vBoard[0][2] == simbol
    ) {
      //filas
      return true;
    } else if (
      vBoard[1][0] == simbol &&
      vBoard[1][1] == simbol &&
      vBoard[1][2] == simbol
    ) {
      return true;
    } else if (
      vBoard[2][0] == simbol &&
      vBoard[2][1] == simbol &&
      vBoard[2][2] == simbol
    ) {
      return true;
    } else if (
      vBoard[0][0] == simbol &&
      vBoard[1][0] == simbol &&
      vBoard[2][0] == simbol
    ) {
      //columnas
      return true;
    } else if (
      vBoard[0][1] == simbol &&
      vBoard[1][1] == simbol &&
      vBoard[2][1] == simbol
    ) {
      return true;
    } else if (
      vBoard[0][1] == simbol &&
      vBoard[1][1] == simbol &&
      vBoard[2][1] == simbol
    ) {
      return true;
    } else if (
      vBoard[0][0] == simbol &&
      vBoard[1][1] == simbol &&
      vBoard[2][2] == simbol
    ) {
      //cruces
      return true;
    } else if (
      vBoard[0][2] == simbol &&
      vBoard[1][1] == simbol &&
      vBoard[2][0] == simbol
    ) {
      return true;
    }
    return false;
  }

  private checkEndOfGameByWinning(): boolean {
    return this.checkEndOfGameByWinning2(
      this.history[this.history.length - 1].value
    );
  }

  private checkValidMove(move: number): boolean {
    return this.board.checkValidCellValue(move);
  }

  private checkEndOfGameByTie(): boolean {
    let vBoard: number[][] = this.board.getBoard();
    let full = true;
    for (let i = 0; i < vBoard.length; i++) {
      for (let j = 0; j < vBoard[i].length; j++) {
        if (vBoard[i][j] === -1) {
          full = false;
        }
      }
    }
    return full;
  }

  private move(player: Player, move: number, value: number): boolean {
    if (this.board.setBoardCellValue(move, value)) {
      this.history.push({ player, move, value });
      return true;
    }
    return false;
  }

  private displayGame(): void {
    console.log(this.board.displayBoard(this.players[0], this.players[1]));
  }

  async playerSetup() {
    console.clear();
    let inputPlayerOne = await Input.getInput("What is the name of the player 1?");
    let inputPlayerTwo = await Input.getInput("What is the name of the player 2?");
    let startPlayer = Math.floor(Math.random() * 2);
    this.players = [
      new Player(inputPlayerOne.data),
      new Player(inputPlayerTwo.data),
    ];
    if (startPlayer === 1) {
      this.players = [this.players[1], this.players[0]];
    }
    console.log(`\n==== Player: ${this.players[0].name} is starting ====`);
  }

  async startGame() {
    this.endMessage = '';
    //this.board.clearBoard();
    await this.playerSetup();
    let endOfGameByWinning = false;
    let endOfGameByTie = false;
    let activePlayer = 0;
    let cellNumber = 0;
    let input: UserInput;
    let errorMessage = '';
    while (!(endOfGameByWinning || endOfGameByTie)) {
      console.clear();
      if (errorMessage) console.log(errorMessage);
      this.displayGame();
      input = await Input.getInput(
        `${this.players[activePlayer].name} choose your cell`
      );
      cellNumber = Number(input.data);
      errorMessage = `⚠️⚠️That's is not a valid cell, try again.⚠️⚠️`;
      if (this.checkValidMove(cellNumber)) {
        errorMessage = `⚠️⚠️That cell was already selected, try again.⚠️⚠️`;
        if (
          this.move(
            this.players[activePlayer],
            cellNumber,
            activePlayer === 0 ? 1 : 0
          )
        ) {
          activePlayer = activePlayer === 0 ? 1 : 0;
          errorMessage = '';
        }
      }
      endOfGameByTie = this.checkEndOfGameByTie();
      endOfGameByWinning = this.checkEndOfGameByWinning();
    }
    console.clear();
    this.displayGame();
    if (endOfGameByWinning)
      this.endMessage = `🥳🥳🥳 ${
        this.players[activePlayer === 0 ? 1 : 0].name
      } won the game!!!`;
    if (endOfGameByTie)
      this.endMessage = `🙃🙃🙃 Nobody won, best luck the next one...`;
    console.log(this.endMessage);
  }

  showHistory(): void {
    console.clear();
    console.log(
      '\n========================PREVIOUS GAME========================================'
    );
    this.board.clearBoard();
    this.displayGame();
    const lastHistory = [...this.history];
    this.history = [];
    lastHistory.forEach((h: Move) => {
      this.move(h.player, h.move, h.value);
      this.displayGame();
    });
    console.log(`
      ========================================
      ${this.endMessage}
      ========================================`);
  }

}