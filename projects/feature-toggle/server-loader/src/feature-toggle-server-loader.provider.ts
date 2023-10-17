import {makeEnvironmentProviders} from '@angular/core';
import {TransferState} from '@angular/platform-browser';
import {FEATURE_TOGGLE_PATH, FeatureToggleLoaderService} from 'feature-toggle';

import {FeatureToggleServerLoaderService} from './feature-toggle-server-loader.service';

/*
  * SSR loader provider for load file from assets
  * @param path - path to file, absolute or relative to base url path to assets folder
  * @example - featureToggleServerLoaderProvider(`./dist/app-name/browser/assets/filename.json`)
  * @example - featureToggleServerLoaderProvider(`${process.cwd()}/dist/app-name/browser/assets/filename.json`)
*/
export function featureToggleServerLoaderProvider(path: string) {
  return makeEnvironmentProviders([
    {
      provide: FEATURE_TOGGLE_PATH,
      useValue: path,
    },
    {
      provide: FeatureToggleLoaderService,
      useFactory: () => new FeatureToggleServerLoaderService(),
      deps: [TransferState, FEATURE_TOGGLE_PATH],
    },
  ]);
}
