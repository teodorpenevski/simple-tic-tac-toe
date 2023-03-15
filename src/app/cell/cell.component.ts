import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input()
  value!: string;
}
