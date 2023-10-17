import {TestBed} from '@angular/core/testing';

import {FeatureToggleServerLoaderService} from './feature-toggle-server-loader.service';

describe('FeatureToggleServerLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureToggleServerLoaderService = TestBed.inject(FeatureToggleServerLoaderService);
    expect(service).toBeTruthy();
  });
});
