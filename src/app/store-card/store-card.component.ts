import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
  standalone: true,
})
export class StoreCardComponent  implements OnInit {

  storeName = input('');
  @Input() description: string = '';
  imageUrl: string = '';

  // Getter/Setter Style
  private _hasAwesomeness: boolean = false;
  
  @Input()
  get hasAwesomeness(): boolean {
    return this._hasAwesomeness;
  }  
  set hasAwesomeness(value: boolean) {
    this._hasAwesomeness = true;
  }

  constructor() { }

  ngOnInit() {}

}
