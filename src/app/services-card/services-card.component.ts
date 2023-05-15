import { Component, Input } from '@angular/core';
import { Services } from '../interfaces/services';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent {
  @Input() serviceCard: Services;
}
