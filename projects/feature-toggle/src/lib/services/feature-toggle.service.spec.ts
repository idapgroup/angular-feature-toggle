import {TestBed} from '@angular/core/testing';

import {FeatureToggleService} from './feature-toggle.service';

describe('FeatureToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureToggleService = TestBed.inject(FeatureToggleService);
    expect(service).toBeTruthy();
  });
});
