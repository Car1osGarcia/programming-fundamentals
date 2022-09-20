"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const Input_1 = require("./Input");
const Player_1 = __importDefault(require("./Player"));
class TicTacToe {
    constructor() {
        this.history = [];
        this.endMessage = "";
        this.board = new Board_1.Board(3, 3);
    }
    // [[0,1,2], [0,1,2], [0,1,2]]
    // fila, columna
    //   0   1   2
    // 0 1 | 2 | 3
    // 1 4 | 5 | 6
    // 2 7 | 8 | 9
    checkEndOfGameByWinning2(simbol) {
        let vBoard = this.board.getBoard();
        //
        if (vBoard[0][0] == simbol &&
            vBoard[0][1] == simbol &&
            vBoard[0][2] == simbol) {
            //filas
            return true;
        }
        else if (vBoard[1][0] == simbol &&
            vBoard[1][1] == simbol &&
            vBoard[1][2] == simbol) {
            return true;
        }
        else if (vBoard[2][0] == simbol &&
            vBoard[2][1] == simbol &&
            vBoard[2][2] == simbol) {
            return true;
        }
        else if (vBoard[0][0] == simbol &&
            vBoard[1][0] == simbol &&
            vBoard[2][0] == simbol) {
            //columnas
            return true;
        }
        else if (vBoard[0][1] == simbol &&
            vBoard[1][1] == simbol &&
            vBoard[2][1] == simbol) {
            return true;
        }
        else if (vBoard[0][1] == simbol &&
            vBoard[1][1] == simbol &&
            vBoard[2][1] == simbol) {
            return true;
        }
        else if (vBoard[0][0] == simbol &&
            vBoard[1][1] == simbol &&
            vBoard[2][2] == simbol) {
            //cruces
            return true;
        }
        else if (vBoard[0][2] == simbol &&
            vBoard[1][1] == simbol &&
            vBoard[2][0] == simbol) {
            return true;
        }
        return false;
    }
    checkEndOfGameByWinning() {
        return this.checkEndOfGameByWinning2(this.history[this.history.length - 1].value);
    }
    checkValidMove(move) {
        return this.board.checkValidCellValue(move);
    }
    checkEndOfGameByTie() {
        let vBoard = this.board.getBoard();
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
    move(player, move, value) {
        if (this.board.setBoardCellValue(move, value)) {
            this.history.push({ player, move, value });
            return true;
        }
        return false;
    }
    displayGame() {
        console.log(this.board.displayBoard(this.players[0], this.players[1]));
    }
    playerSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            console.clear();
            let inputPlayerOne = yield Input_1.Input.getInput("What is the name of the player 1?");
            let inputPlayerTwo = yield Input_1.Input.getInput("What is the name of the player 2?");
            let startPlayer = Math.floor(Math.random() * 2);
            this.players = [
                new Player_1.default(inputPlayerOne.data),
                new Player_1.default(inputPlayerTwo.data),
            ];
            if (startPlayer === 1) {
                this.players = [this.players[1], this.players[0]];
            }
            console.log(`\n==== Player: ${this.players[0].name} is starting ====`);
        });
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            this.endMessage = '';
            //this.board.clearBoard();
            yield this.playerSetup();
            let endOfGameByWinning = false;
            let endOfGameByTie = false;
            let activePlayer = 0;
            let cellNumber = 0;
            let input;
            let errorMessage = '';
            while (!(endOfGameByWinning || endOfGameByTie)) {
                console.clear();
                if (errorMessage)
                    console.log(errorMessage);
                this.displayGame();
                input = yield Input_1.Input.getInput(`${this.players[activePlayer].name} choose your cell`);
                cellNumber = Number(input.data);
                errorMessage = `⚠️⚠️That's is not a valid cell, try again.⚠️⚠️`;
                if (this.checkValidMove(cellNumber)) {
                    errorMessage = `⚠️⚠️That cell was already selected, try again.⚠️⚠️`;
                    if (this.move(this.players[activePlayer], cellNumber, activePlayer === 0 ? 1 : 0)) {
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
                this.endMessage = `🥳🥳🥳 ${this.players[activePlayer === 0 ? 1 : 0].name} won the game!!!`;
            if (endOfGameByTie)
                this.endMessage = `🙃🙃🙃 Nobody won, best luck the next one...`;
            console.log(this.endMessage);
        });
    }
    showHistory() {
        console.clear();
        console.log('\n========================PREVIOUS GAME========================================');
        this.board.clearBoard();
        this.displayGame();
        const lastHistory = [...this.history];
        this.history = [];
        lastHistory.forEach((h) => {
            this.move(h.player, h.move, h.value);
            this.displayGame();
        });
        console.log(`
      ========================================
      ${this.endMessage}
      ========================================`);
    }
}
exports.default = TicTacToe;
