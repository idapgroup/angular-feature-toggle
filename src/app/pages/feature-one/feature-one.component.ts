import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-feature-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss'],
})
export class FeatureOneComponent {

}
