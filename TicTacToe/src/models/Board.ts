import Player from './Player';

export class Board {
  private board: number[][] = [];
  private simbolX: string = "X";
  private simbolY: string = "O";
  private rows: number;
  private columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.initialize();
  }

  private initialize(): void {
   
    for (let i: number = 0; i < this.rows; i++) {
      let row: number[] = [];
      for (let j: number = 0; j < this.columns; j++) {
        
        row.push(-1);
      }
      this.board.push(row);
    }
  }

  clearBoard():void{
    let row: number[] = [];
    for (let j: number = 0; j < this.columns; j++) {
      row.push(-1);
    }
    for (let i: number = 0; i < this.rows; i++) {
      this.board.push(row);
    }
  }

  getBoard(): number[][] {
    return this.board;
  }

  position (cellNumber:number): number[]{
    switch(cellNumber){
      case 1:
        return [0,0];
      case 2:
        return [0,1];
      case 3:
        return [0,2];
      case 4:
        return [1,0];
      case 5:
        return [1,1];
      case 6:
        return [1,2];
      case 7:
        return [2,0];
      case 8:
        return [2,1];
      case 9:
        return [2,2];
      default:
        return [0,0];
    }
  }

  checkValidCellValue(cellNumber: number): boolean {
    return cellNumber>0 && cellNumber<10 ? true : false;
  }

  setBoardCellValue(cellNumber: number, value: number): boolean {
    let position = this.position(cellNumber)!;
    if (this.board[position[0]][position[1]] !== -1) return false;
    this.board[position[0]][position[1]] = value;
    return true;
  }

  displayBoard(player1: Player, player2: Player): string{
    let str:string='';
    str+="/////////TIC-TAC-TOE/////////\n";
    str+=`/// ${player1.name}: ${this.simbolX} ///\n`;
    str+=`/// ${player2.name}: ${this.simbolY} ///\n`;
    str+="/////////////////////////////\n";

    for(let i=0; i<this.board.length; i++){
        
        for(let j=0; j<this.board[i].length; j++){
            if(j != 0){
                str+=' | ';
            }
            if(this.board[i][j]==1){
                str+=this.simbolX;
            }else if(this.board[i][j]==0){
                str+= this.simbolY;
            }else{
                str+=(3*i)+j+1;
                //str+= i+","+j;
            }
        }
        if(i!=this.board.length-1){
            str+='\n----------------\n'
        }
    }

    return str;
  }
}