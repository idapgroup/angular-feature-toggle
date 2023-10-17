import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {featureToggleBrowserLoaderProvider} from 'feature-toggle/browser-loader';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@NgModule({
  imports: [
    AppModule,
    BrowserAnimationsModule,
  ],
  providers: [
    featureToggleBrowserLoaderProvider('/assets/feature-toggle.json'),
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
