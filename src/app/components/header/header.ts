import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private contactService = inject(ContactService);

  contactInfo = this.contactService.contactInfoSignal;
  phoneLink = this.contactService.getPhoneLink();
  whatsappLink = this.contactService.getWhatsAppLink();
}
