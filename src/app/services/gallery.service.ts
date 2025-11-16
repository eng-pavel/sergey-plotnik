import { inject, Injectable } from '@angular/core';
import { ImageService } from './image.service';
import { IGalleryAlbum } from '../models/albums.interface';

/**
 * Инфо о фотоальбомах
 */
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private imageService = inject(ImageService);

  getGalleryAlbums(): IGalleryAlbum[] {
    return [
      {
        id: 'office-partitions',
        title: 'Офисные перегородки',
        preview: this.imageService.getGalleryImage('office-partitions', 'preview.jpeg'),
        description: 'Пример монтажа офисных перегородок разных конструкций.',
        images: [
          {
            src: this.imageService.getGalleryImage('office-partitions', 'office1.jpeg'),
            alt: 'Монтаж офисных перегородок - процесс установки',
          },
          {
            src: this.imageService.getGalleryImage('office-partitions', 'office2.jpeg'),
            alt: 'Готовые офисные перегородки - результат работы',
          },
        ],
      },
      {
        id: 'playground',
        title: 'Детская площадка',
        preview: this.imageService.getGalleryImage('playground', 'preview.jpeg'),
        description: 'Сборка была произведена мной за один день.',
        images: [
          {
            src: this.imageService.getGalleryImage('playground', 'playground1.jpeg'),
            alt: 'Детская площадка - общий вид',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground2.jpeg'),
            alt: 'Детская площадка - элементы конструкции',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground3.jpeg'),
            alt: 'Детская площадка - качели и горки',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground4.jpeg'),
            alt: 'Детская площадка - песочница',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground5.jpeg'),
            alt: 'Детская площадка - лестницы',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground6.jpeg'),
            alt: 'Детская площадка - турники',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground7.jpeg'),
            alt: 'Детская площадка - домик',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground8.jpeg'),
            alt: 'Детская площадка - горка',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground9.jpeg'),
            alt: 'Детская площадка - карусель',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground10.jpeg'),
            alt: 'Детская площадка - балансиры',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground11.jpeg'),
            alt: 'Детская площадка - лазалки',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground12.jpeg'),
            alt: 'Детская площадка - сетки',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground13.jpeg'),
            alt: 'Детская площадка - перила',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground14.jpeg'),
            alt: 'Детская площадка - ограждения',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground15.jpeg'),
            alt: 'Детская площадка - покрытие',
          },
          {
            src: this.imageService.getGalleryImage('playground', 'playground16.jpeg'),
            alt: 'Детская площадка - общий план',
          },
        ],
      },
      {
        id: 'furniture-assembly',
        title: 'Сборка мебели',
        preview: this.imageService.getGalleryImage('furniture-assembly', 'preview.jpeg'),
        description: 'Профессиональная сборка корпусной и мягкой мебели.',
        images: [
          {
            src: this.imageService.getGalleryImage('furniture-assembly', 'furniture1.jpeg'),
            alt: 'Сборка шкафа-купе',
          },
          {
            src: this.imageService.getGalleryImage('furniture-assembly', 'furniture2.jpeg'),
            alt: 'Сборка кухонного гарнитура',
          },
        ],
      },
    ];
  }
}
