import { Component, Input } from '@angular/core';
import { Summary } from '../interfaces/summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() summaryCardFirst: Summary;
}
