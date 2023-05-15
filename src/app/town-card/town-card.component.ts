import { Component, Input } from '@angular/core';
import { Town } from '../interfaces/town';

@Component({
  selector: 'app-town-card',
  templateUrl: './town-card.component.html',
  styleUrls: ['./town-card.component.scss']
})
export class TownCardComponent {
  @Input() townCard: Town;

}
