/**
 * @Bootstraps an instance of an Angular application 
 * and renders a standalone component as the application's root component. 
 */
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import '@angular/compiler';
platformBrowserDynamic().bootstrapModule(AppModule).catch(error=>console.error(error));