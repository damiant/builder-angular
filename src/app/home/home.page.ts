import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { fetchOneEntry, type BuilderContent } from '@builder.io/sdk-angular';
import { Content } from '@builder.io/sdk-angular';
import { environment } from 'src/environments/environment';
import { toolsBuilderComponent } from '../tools/tools.builder';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [Content, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomePage implements OnInit {
  content: BuilderContent | null = null;
  model = 'page';
  apiKey = environment.builderPublicKey;
  customComponents = [toolsBuilderComponent];
  constructor() { }

  async ngOnInit() {
    const urlPath = window.location.pathname || '';
    const content = await fetchOneEntry({
      apiKey: this.apiKey,
      model: this.model,
      userAttributes: {
        urlPath,
      },
    });
    this.content = content;
    console.log('content', content);
    console.log('urlPath', urlPath);
  }
}
