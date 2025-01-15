import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content, fetchOneEntry, type BuilderContent } from '@builder.io/sdk-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
  standalone: true,
  imports: [Content, CommonModule, FormsModule]
})
export class StoresPage implements OnInit {
  content: BuilderContent | null = null;
  model = 'store-page';
  apiKey = environment.builderPublicKey;
  constructor() { }

  async ngOnInit() {
    const urlPath = window.location.pathname || '';
    const content = await fetchOneEntry({
      apiKey: this.apiKey,
      model: this.model,
      userAttributes: {
        urlPath,
        tier: 'gold',
      },
    });
    this.content = content;
    console.log('content', content);
    console.log('urlPath', urlPath);
  }

}
