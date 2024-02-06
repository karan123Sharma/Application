import { CommonModule } from '@angular/common';
import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  marks = [
    {
      id:1,
      subject:"TOC",
      marks:90,
    },
    {
      id:2,
      subject:"Network",
      marks:90,
    },
    {
      id:3,
      subject:"Data Structures",
      marks:100,
    },
    {
      id:5,
      subject:"Web Serving",
      marks:70,
    },
  ]
  sumfunc(){
    const sum = this.marks.reduce((acc,curr) => acc + curr.marks ,0);
    const totalPossibleMarks = this.marks.length * 100; 
    return (sum / totalPossibleMarks) * 100;
  }
  a:number = this.sumfunc() ;
}
