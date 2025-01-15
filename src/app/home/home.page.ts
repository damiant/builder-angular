import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { fetchEntries, fetchOneEntry, type BuilderContent } from '@builder.io/sdk-angular';
import { Content } from '@builder.io/sdk-angular';
import { environment } from 'src/environments/environment';
import { toolsBuilderComponent } from '../tools/tools.builder';
import { StoresPage } from '../stores/stores.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [Content, IonHeader, IonToolbar, IonTitle, IonContent, StoresPage]
})
export class HomePage implements OnInit {
  content: BuilderContent | null = null;
  model = 'page';
  data = { title: 'Title passed from code' };
  context = {
    sayHi: () => alert('Hi 4')
  };
  apiKey = environment.builderPublicKey;
  customComponents = [toolsBuilderComponent];
  constructor() { }

  async ngOnInit() {
    const urlPath = window.location.pathname || '';
    const content = await fetchOneEntry({
      apiKey: this.apiKey,
      model: this.model,    
      //cacheSeconds: environment.production ? 60 : 3,      
      options: { cacheBust: !environment.production },              
      userAttributes: {
        urlPath,
      },
    });
    this.content = content;
    console.log('production', environment.production);
    console.log('content', content);
    console.log('urlPath', urlPath);
    const stores = await fetchEntries({ model: 'stores', apiKey: this.apiKey });
    console.log('stores', stores);
  }
}
