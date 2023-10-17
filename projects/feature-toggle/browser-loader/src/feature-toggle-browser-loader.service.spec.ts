import {TestBed} from '@angular/core/testing';

import {FeatureToggleBrowserLoaderService} from './feature-toggle-browser-loader.service';

describe('FeatureToggleBrowserLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureToggleBrowserLoaderService = TestBed.inject(FeatureToggleBrowserLoaderService);
    expect(service).toBeTruthy();
  });
});
