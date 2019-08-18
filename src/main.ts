import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// Add Service Worker js file to bootstrap (Needed for remoteServer) works fine without this on localhost:8080
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    const isProduction = environment.production;
    if (isProduction) {
        console.log(`App running ${environment.envName}  mode..............`);
    } else {
        console.log(`App running ${environment.envName} mode..............`);
    }

    if ('serviceWorker' in navigator && isProduction) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
}).catch(err => console.log(err));
