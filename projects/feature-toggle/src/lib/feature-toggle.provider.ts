import {APP_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders} from '@angular/core';

import {FeatureToggleService} from './services/feature-toggle.service';

function initializeFeatureFlags() {
  const featureToggleService = inject(FeatureToggleService);
  return () => featureToggleService.load();
}

export function provideFeatureToggle(): EnvironmentProviders {
  return makeEnvironmentProviders([
    FeatureToggleService,
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeFeatureFlags(),
      deps: [FeatureToggleService],
      multi: true,
    },
  ]);
}
