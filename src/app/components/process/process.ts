import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProcessStep } from '../../models/albums.interface';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Process {
  @Input() workProcess: IProcessStep[] = [];
}
