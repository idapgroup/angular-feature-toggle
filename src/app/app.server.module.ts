import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {featureToggleServerLoaderProvider} from 'feature-toggle/server-loader';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    featureToggleServerLoaderProvider('./dist/example-feature-toggle/browser/assets/feature-toggle.json'),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
