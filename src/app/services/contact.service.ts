import { Injectable, signal } from '@angular/core';

export interface IContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  workingHours: string;
}

/**
 * Сервис для хранения контактной информации
 * для обновления сразу во всех компонентах, где она используется
 */
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactInfo = signal<IContactInfo>({
    phone: '+79264595379',
    phoneFormatted: '+7 (926) 459-53-79',
    whatsapp: '79264595379',
    workingHours: 'ежедневно с 8:00 до 22:00',
  });

  readonly contactInfoSignal = this.contactInfo.asReadonly();

  getPhoneLink(): string {
    return `tel:${this.contactInfo().phone}`;
  }

  getWhatsAppLink(): string {
    const message = `Здравствуйте! Хочу заказать услугу по предоставлению доступа к трубам с сохранением плитки`;
    return `https://wa.me/${this.contactInfo().whatsapp}?text=${encodeURIComponent(message)}`;
  }

  updateContactInfo(newInfo: Partial<IContactInfo>): void {
    this.contactInfo.update((current) => ({ ...current, ...newInfo }));
  }
}
