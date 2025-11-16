import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IService } from '../../models/albums.interface';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  @Input() services: IService[] = [];
}
