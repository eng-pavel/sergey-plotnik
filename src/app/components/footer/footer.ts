import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private contactService = inject(ContactService);

  contactInfo = this.contactService.contactInfoSignal;
  phoneLink = this.contactService.getPhoneLink();
  whatsappLink = this.contactService.getWhatsAppLink();
}
