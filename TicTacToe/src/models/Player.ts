

export default class Player {
  get name(): string {
    return this.nickname;
  }

  set name(nickname: string) {
    this.nickname = nickname;
  }

  constructor(private nickname: string) {}
}