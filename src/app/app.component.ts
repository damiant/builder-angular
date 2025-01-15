import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from "@builder.io/sdk-angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  constructor() {
    register("editor.settings", {
      designTokens: {
        colors: [
          { name: "Primary", value: "var(--ion-color-primary, #0e8ef5)" },
          { name: "Secondary", value: "var(--ion-color-secondary, #0cd1e8)" },
          { name: "Tertiary", value: "var(--ion-color-tertiary, #7044ff)" },
          { name: "Success", value: "var(--ion-color-success, #10dc60)" },
          { name: "Warning", value: "var(--ion-color-warning, #ffce00)" },
          { name: "Danger", value: "var(--ion-color-danger, #f04141)" },
          { name: "Light", value: "var(--ion-color-light, #f4f5f8)" },
          { name: "Medium", value: "var(--ion-color-medium, #989aa2)" }
        ]
      }
    });
  }
}
