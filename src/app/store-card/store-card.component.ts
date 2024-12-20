import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
  standalone: true,
})
export class StoreCardComponent  implements OnInit {

  storeName: string = '';
  description: string = '';
  imageUrl: string = '';
  constructor() { }

  ngOnInit() {}

}
