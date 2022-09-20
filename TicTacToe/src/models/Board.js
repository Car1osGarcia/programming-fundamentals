"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(rows, columns) {
        this.board = [];
        this.simbolX = "X";
        this.simbolY = "O";
        this.rows = rows;
        this.columns = columns;
        this.initialize();
    }
    initialize() {
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.columns; j++) {
                row.push(-1);
            }
            this.board.push(row);
        }
    }
    clearBoard() {
        let row = [];
        for (let j = 0; j < this.columns; j++) {
            row.push(-1);
        }
        for (let i = 0; i < this.rows; i++) {
            this.board.push(row);
        }
    }
    getBoard() {
        return this.board;
    }
    position(cellNumber) {
        switch (cellNumber) {
            case 1:
                return [0, 0];
            case 2:
                return [0, 1];
            case 3:
                return [0, 2];
            case 4:
                return [1, 0];
            case 5:
                return [1, 1];
            case 6:
                return [1, 2];
            case 7:
                return [2, 0];
            case 8:
                return [2, 1];
            case 9:
                return [2, 2];
            default:
                return [0, 0];
        }
    }
    checkValidCellValue(cellNumber) {
        return cellNumber > 0 && cellNumber < 10 ? true : false;
    }
    setBoardCellValue(cellNumber, value) {
        let position = this.position(cellNumber);
        if (this.board[position[0]][position[1]] !== -1)
            return false;
        this.board[position[0]][position[1]] = value;
        return true;
    }
    displayBoard(player1, player2) {
        let str = '';
        str += "/////////TIC-TAC-TOE/////////\n";
        str += `/// ${player1.name}: ${this.simbolX} ///\n`;
        str += `/// ${player2.name}: ${this.simbolY} ///\n`;
        str += "/////////////////////////////\n";
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (j != 0) {
                    str += ' | ';
                }
                if (this.board[i][j] == 1) {
                    str += this.simbolX;
                }
                else if (this.board[i][j] == 0) {
                    str += this.simbolY;
                }
                else {
                    str += (3 * i) + j + 1;
                    //str+= i+","+j;
                }
            }
            if (i != this.board.length - 1) {
                str += '\n----------------\n';
            }
        }
        return str;
    }
}
exports.Board = Board;
