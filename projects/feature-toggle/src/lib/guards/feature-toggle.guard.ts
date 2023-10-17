import {inject} from '@angular/core';
import {CanMatchFn} from '@angular/router';

import {FeatureToggle} from '../models/feature-toggle';
import {FeatureToggleService} from '../services/feature-toggle.service';

export function featureToggleGuard(feature: keyof FeatureToggle): CanMatchFn {
  return () => {
    const featureToggleService = inject(FeatureToggleService);
    return featureToggleService.isFeatureEnabled(feature);
  };
}
