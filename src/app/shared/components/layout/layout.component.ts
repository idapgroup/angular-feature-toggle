import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FeatureToggleDirective} from 'feature-toggle';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, RouterLink, FeatureToggleDirective, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  readonly navLinks = [
    {
      label: 'Home',
      link: '/',
      feature: null,
    },
    {
      label: 'Feature One',
      link: '/feature-one',
      feature: 'feature-one',
    },
    {
      label: 'Feature Two',
      link: '/feature-two',
      feature: 'feature-two',
    },
  ];
}
