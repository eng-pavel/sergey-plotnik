import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  @Input() backgroundImage!: string;
  @Input() gradient!: string;

  get backgroundStyle() {
    return {
      'background-image': `${this.gradient}, url(${this.backgroundImage})`,
    };
  }
}
