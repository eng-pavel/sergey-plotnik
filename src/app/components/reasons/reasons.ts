import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-reasons',
  imports: [],
  templateUrl: './reasons.html',
  styleUrl: './reasons.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reasons {
  @Input() reasons: string[] = [];
}
