import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {}
