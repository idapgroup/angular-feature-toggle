import {HttpClient} from '@angular/common/http';
import {makeEnvironmentProviders} from '@angular/core';
import {TransferState} from '@angular/platform-browser';
import {FEATURE_TOGGLE_PATH, FeatureToggleLoaderService} from 'feature-toggle';

import {FeatureToggleBrowserLoaderService} from './feature-toggle-browser-loader.service';

/*
  * CSR loader provider for load file from assets
  * @param path - path to file, relative to assets folder
 */
export function featureToggleBrowserLoaderProvider(path: string) {
  return makeEnvironmentProviders([
    {
      provide: FEATURE_TOGGLE_PATH,
      useValue: path,
    },
    {
      provide: FeatureToggleLoaderService,
      useFactory: () => new FeatureToggleBrowserLoaderService(),
      deps: [TransferState, HttpClient, FEATURE_TOGGLE_PATH],
    },
  ]);
}
