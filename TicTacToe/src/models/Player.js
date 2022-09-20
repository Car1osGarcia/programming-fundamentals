"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(nickname) {
        this.nickname = nickname;
    }
    get name() {
        return this.nickname;
    }
    set name(nickname) {
        this.nickname = nickname;
    }
}
exports.default = Player;
