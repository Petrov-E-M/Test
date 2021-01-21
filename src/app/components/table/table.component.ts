import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() hero: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hero);
  }

  headElements = ['NAME'];
}
