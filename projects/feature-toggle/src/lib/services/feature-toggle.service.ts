import {computed, inject, Injectable, signal} from '@angular/core';

import {FeatureToggle, FeatureToggleLoaderService} from '../models/feature-toggle';

@Injectable()
export class FeatureToggleService {

  #features = signal<FeatureToggle | null>(null);
  readonly featureFlags = computed(() => this.#features());

  readonly featureToggleLoaderService = inject(FeatureToggleLoaderService);

  async load(): Promise<FeatureToggle> {
    if (typeof this.featureToggleLoaderService.load !== 'function') {
      throw new Error('FeatureToggleLoaderService does not implement load()');
    }
    const res = await this.featureToggleLoaderService.load();
    this.#features.set(res);
    return res;
  }

  isFeatureEnabled(featureName: keyof FeatureToggle | (keyof FeatureToggle)[]): boolean {
    const features = this.#features();
    if (!features) {
      return false;
    }
    if (Array.isArray(featureName)) {
      return featureName.some(name => features[name]);
    }
    return features[featureName] || false;
  }

}
