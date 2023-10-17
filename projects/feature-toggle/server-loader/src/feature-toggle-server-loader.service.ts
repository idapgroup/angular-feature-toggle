import {inject, Injectable, makeStateKey} from '@angular/core';
import {TransferState} from '@angular/platform-browser';
import {FEATURE_TOGGLE_PATH, FEATURE_TOGGLE_STATE_KEY, FeatureToggle, FeatureToggleLoaderService} from 'feature-toggle';

@Injectable()
export class FeatureToggleServerLoaderService extends FeatureToggleLoaderService {

  private readonly transferState = inject(TransferState);
  private readonly path = inject(FEATURE_TOGGLE_PATH);

  constructor() {
    super();
  }

  async load<T extends FeatureToggle>(): Promise<T> {
    try {
      const fs = await import('fs');
      const data = fs.readFileSync(this.path, 'utf8');
      const jsonData: T = JSON.parse(data);
      const key = makeStateKey<string>(FEATURE_TOGGLE_STATE_KEY);
      this.transferState.set(key, JSON.stringify(jsonData));
      return jsonData;
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }

}
