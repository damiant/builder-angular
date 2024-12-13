import { bootstrapApplication } from "@angular/platform-browser";
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from "@angular/router";
import { IonicRouteStrategy, provideIonicAngular } from "@ionic/angular/standalone";
import { routes } from "./app/app.routes";
import { builderDevTools } from "@builder.io/dev-tools/angular";
import { AppComponent } from "./app/app.component";
bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
});

builderDevTools().catch((err: Error) =>
    console.error("Error starting dev tools:", err)
  );