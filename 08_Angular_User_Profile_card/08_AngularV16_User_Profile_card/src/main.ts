import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// // import { AppComponent } from './app/app.component';
// import { AppModule } from './app/app.module';
// import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideAnimations() // required for Angular Material
   
//   ]
// }).catch(err => console.error(err));