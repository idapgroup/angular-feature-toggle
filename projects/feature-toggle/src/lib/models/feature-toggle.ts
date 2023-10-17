import {Injectable} from '@angular/core';

@Injectable()
export abstract class FeatureToggleLoaderService {
  abstract load<T extends FeatureToggle>(): Promise<T>;
}

export interface FeatureToggle {
  [key: string]: boolean;
}
