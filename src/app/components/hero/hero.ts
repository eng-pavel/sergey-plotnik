import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';

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

  private contactService = inject(ContactService);

  phoneLink = this.contactService.getPhoneLink();
  whatsappLink = this.contactService.getWhatsAppLink();

  get backgroundStyle() {
    return {
      'background-image': `${this.gradient}, url(${this.backgroundImage})`,
    };
  }
}
