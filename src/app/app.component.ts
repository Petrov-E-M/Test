import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elements: any = ['Mark', 'Jack', 'Pirate'];

  addItem(newItem: string) {
    this.elements.push(newItem);
  }
}
