import {HttpClient} from '@angular/common/http';
import {inject, Injectable, makeStateKey, StateKey} from '@angular/core';
import {TransferState} from '@angular/platform-browser';
import {FEATURE_TOGGLE_PATH, FEATURE_TOGGLE_STATE_KEY, FeatureToggle, FeatureToggleLoaderService} from 'feature-toggle';
import {lastValueFrom} from 'rxjs';

@Injectable()
export class FeatureToggleBrowserLoaderService extends FeatureToggleLoaderService {

  private readonly transferState = inject(TransferState);
  private readonly httpClient = inject(HttpClient);
  private readonly path = inject(FEATURE_TOGGLE_PATH);

  constructor() {
    super();
  }

  load<T extends FeatureToggle>(): Promise<T> {
    const key: StateKey<string> = makeStateKey<string>(FEATURE_TOGGLE_STATE_KEY);
    const data: string | null = this.transferState.get(key, null);
    if (data) {
      return JSON.parse(data);
    }
    return lastValueFrom(this.httpClient.get<T>(this.path, {params: {id: new Date().getTime().toString()}}));
  }

}
