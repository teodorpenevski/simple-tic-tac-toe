import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  cells: string[] = [];
  whoIsNext: boolean = true;
  winner: string | null | undefined;
  draw: boolean = false;

  constructor() {}

  ngOnInit() {
    this.createGame();
  }

  createGame() {
    this.cells = Array(9).fill(null);
    this.whoIsNext = true;
    this.winner = null;
    this.draw = false;
  }

  get player() {
    return this.whoIsNext ? 'X' : 'O';
  }

  makeNextMove(index: number) {
    if (!this.cells[index]) {
      this.cells.splice(index, 1, this.player);
      this.whoIsNext = !this.whoIsNext;
    }
    if (!this.cells.includes(null!)) {
      this.draw = true;
    }

    this.winner = this.getWinner();
  }

  getWinner() {
    const winCells = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < winCells.length; i++) {
      const [x, y, z] = winCells[i];
      if (
        this.cells[x] &&
        this.cells[x] == this.cells[y] &&
        this.cells[x] == this.cells[z]
      ) {
        return this.cells[x];
      }
    }
    return null;
  }
}
