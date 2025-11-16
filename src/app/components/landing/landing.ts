import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import {
  IService,
  IProcessStep,
  IGalleryAlbum,
  IAlbumClickEvent,
} from '../../models/albums.interface';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';
import { Process } from '../process/process';
import { Reasons } from '../reasons/reasons';
import { Gallery } from '../gallery/gallery';
import { Reviews } from '../reviews/reviews';
import { Footer } from '../footer/footer';
import { GalleryModal } from '../gallery-modal/gallery-modal';
import { ImageService } from '../../services/image.service';

/**
 * Основной компонент лендинга
 */
@Component({
  selector: 'app-landing',
  imports: [
    GalleriaModule,
    Header,
    Hero,
    Services,
    Process,
    Reasons,
    Gallery,
    Reviews,
    Footer,
    GalleryModal,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing implements OnInit {
  private imageService = inject(ImageService);
  modalVisible = false;
  currentAlbumId: string | null = null;
  initialImageIndex = 0;
  galleryAlbums: IGalleryAlbum[] = [];

  heroBackgroundImage =
    'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
  heroGradient = 'linear-gradient(rgba(30, 93, 123, 0.85), rgba(22, 74, 97, 0.9))';

  services: IService[] = [
    {
      title: 'Установка сантехнического люка',
      description:
        'Профессиональная установка люков различных размеров для доступа к коммуникациям',
      icon: '🚪',
      image:
        'https://images.unsplash.com/photo-1759204078331-9817c4f20344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Расширение отверстия под люк',
      description: 'Аккуратное расширение проема с сохранением целостности стены',
      icon: '🔧',
      image:
        'https://images.unsplash.com/photo-1628002580365-f3c0a322d577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Снятие плитки с сохранением и без',
      description: 'Демонтаж плитки любой сложности с возможностью сохранения материала',
      icon: '🔨',
      image:
        'https://images.unsplash.com/photo-1678743539452-9363f2fe86d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Восстановление плитки в исходное состояние',
      description: 'Реставрация плитки после ремонта коммуникаций',
      icon: '✨',
      image:
        'https://images.unsplash.com/photo-1713640113797-35abeadfe0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Монтаж плитки на магнитах',
      description: 'Современное решение для быстрого доступа к трубам',
      icon: '🧲',
      image:
        'https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Оперативный доступ к протечке труб',
      description: 'Срочный выезд и быстрое вскрытие для устранения аварий',
      icon: '⚡',
      image:
        'https://images.unsplash.com/photo-1518201660989-894b770d6e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
  ];

  reasons = [
    'Капитальный ремонт дома с заменой труб водоснабжения и канализации',
    'Потекли отводы на полотенцесушителе',
    'Течь у соседей снизу, определение причины',
    'Течь на соединении канализационной трубы',
  ];

  workProcess: IProcessStep[] = [
    {
      step: '1',
      title: 'Осмотр и консультация',
      description: 'Выезд и оценка объема работ',
      image:
        'https://images.unsplash.com/photo-1642006953665-4046190641ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      step: '2',
      title: 'Подготовка и демонтаж',
      description: 'Аккуратное вскрытие с минимальным повреждением',
      image:
        'https://images.unsplash.com/photo-1628002580365-f3c0a322d577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      step: '3',
      title: 'Ремонт коммуникаций',
      description: 'Устранение проблемы, замена труб или установка люка',
      image:
        'https://images.unsplash.com/photo-1758239873506-82d0e76244f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      step: '4',
      title: 'Восстановление отделки',
      description: 'Возвращаем плитку в идеальное состояние',
      image:
        'https://images.unsplash.com/photo-1678743539452-9363f2fe86d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
  ];

  async ngOnInit(): Promise<void> {
    await this.loadGalleryAlbums();
  }

  private async loadGalleryAlbums(): Promise<void> {
    this.galleryAlbums = [
      {
        id: 'office-partitions',
        title: 'Офисные перегородки',
        preview: this.imageService.getGalleryImage('office-partitions', 'preview.jpeg'),
        description: 'Пример монтажа офисных перегородок разных конструкций.',
        images: [
          {
            src: this.imageService.getGalleryImage('office-partitions', 'office1.jpeg'),
            alt: '',
          },
          {
            src: this.imageService.getGalleryImage('office-partitions', 'office2.jpeg'),
            alt: '',
          },
        ],
      },
      {
        id: 'playground',
        title: 'Детская площадка',
        preview: this.imageService.getGalleryImage('playground', 'preview.jpeg'),
        description: 'Сборка была произведена мной за один день.',
        images: [
          { src: this.imageService.getGalleryImage('playground', 'playground1.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground2.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground3.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground4.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground5.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground6.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground7.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground8.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground9.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground10.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground11.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground12.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground13.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground14.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground15.jpeg'), alt: '' },
          { src: this.imageService.getGalleryImage('playground', 'playground16.jpeg'), alt: '' },
        ],
      },
      // ... остальные альбомы
    ];
  }

  openGalleryModal(event: IAlbumClickEvent): void {
    this.currentAlbumId = event.albumId;
    this.initialImageIndex = event.initialImageIndex;
    this.modalVisible = true;
  }

  closeGalleryModal(): void {
    this.modalVisible = false;
    this.currentAlbumId = null;
    this.initialImageIndex = 0;
  }
}
