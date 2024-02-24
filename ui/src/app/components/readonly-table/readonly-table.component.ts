import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../types/tables';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-readonly-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './readonly-table.component.html',
  styleUrl: './readonly-table.component.scss'
})

export class ReadonlyTableComponent {
  @Input() data!: any[];
  @Input() columns!: Column[];

  @Output() rowSelect = new EventEmitter<any>();
  @Output() rowDblClick = new EventEmitter<any>();

  selectedNdx?: number;

  onRowSelect(rowData: any, ndx: number) {
    if(ndx === this.selectedNdx) {
      this.selectedNdx = undefined;
      this.rowSelect.emit(null);
    } else {
      this.selectedNdx = ndx;
      this.rowSelect.emit(rowData);
    }
  }

  handleDoubleClick(rowData: any) {
    this.rowDblClick.emit(rowData);
  }

  getDataField(data: any, col: Column): string {
    if(col.subfield != null || col.subfield != undefined) {
      return data[col.field as keyof Object][col.subfield as keyof Object].toString();
    } else {
      return data[col.field as keyof Object].toString();
    }
  }
}
