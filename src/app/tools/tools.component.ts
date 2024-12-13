import { Component, input, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  standalone: true,
})
export class ToolsComponent implements OnInit {

  @Input() title!: string;
  description = input('');
  constructor() { }

  ngOnInit() { }

}
