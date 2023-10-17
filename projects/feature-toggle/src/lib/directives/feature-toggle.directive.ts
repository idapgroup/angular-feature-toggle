import {
  ChangeDetectorRef,
  Directive,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {Subject} from 'rxjs';

import {FeatureToggleService} from '../services/feature-toggle.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[featureToggle]',
  standalone: true,
})
export class FeatureToggleDirective implements OnChanges, OnDestroy {

  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly featureToggleService = inject(FeatureToggleService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyStream$ = new Subject<void>();
  private feature: string | string[] | null = null;

  @Input({required: true}) set featureToggle(feature: string[] | string | null) {
    this.feature = feature;
    this.checkFeature();
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({alias: 'featureToggleElse'}) elseRef: TemplateRef<unknown> | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if ('featureToggle' in changes) {
      this.checkFeature();
    }
    if ('featureToggleElse' in changes) {
      this.checkFeature();
    }
  }

  private checkFeature(): void {
    const feature = this.feature;
    if ((Array.isArray(feature) && !feature.length) || !feature) {
      this.createView(true);
      return;
    }
    const enabledFeature = this.featureToggleService.isFeatureEnabled(feature) ?? false;
    this.createView(enabledFeature);
  }

  private createView(enabled: boolean): void {
    this.viewContainerRef.clear();
    if (enabled) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.cdr.detectChanges();
      return;
    }
    if (this.elseRef) {
      this.viewContainerRef.createEmbeddedView(this.elseRef);
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy() {
    const destroy = this.destroyStream$;
    if (destroy.closed) {
      return;
    }
    destroy.next();
    destroy.unsubscribe();
  }

}
