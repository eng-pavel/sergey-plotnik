import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  phoneNumber = '+79001234567';
}
