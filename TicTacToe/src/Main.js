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
const TicTacToe_1 = __importDefault(require("./models/TicTacToe"));
const Input_1 = require("./models/Input");
class Main {
    constructor() {
        this.gameMenu = [
            { option: 1, message: 'Start game' },
            { option: 2, message: 'Show last game' },
            { option: 3, message: 'Exit' },
        ];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let option = -1;
            let input;
            let tickTackToe = new TicTacToe_1.default();
            while (option !== 3) {
                input = yield Input_1.Input.getSelect('=====TickTackToe=====', this.gameMenu);
                option = input.data;
                switch (option) {
                    case 1:
                        yield tickTackToe.startGame();
                        break;
                    case 2:
                        tickTackToe.showHistory();
                        break;
                    case 3:
                        console.log(`\n
          ***********************************************
          **===========================================**
          **            Come back soon! 🙋🏻‍♂️          **
          **===========================================**
          ***********************************************\n`);
                        break;
                }
            }
        });
    }
}
exports.default = Main;
