import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key.
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cW2hIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZiW39ccXZUR2NaVkd1Vg==');



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
