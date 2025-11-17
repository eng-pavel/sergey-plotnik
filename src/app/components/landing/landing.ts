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
import { Reviews } from '../reviews/reviews';
import { Footer } from '../footer/footer';
import { GalleryModal } from '../gallery-modal/gallery-modal';
import { GalleryService } from '../../services/gallery.service';

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
  private readonly galleryService = inject(GalleryService);
  modalVisible = false;
  currentAlbumId: string | null = null;
  initialImageIndex = 0;
  galleryAlbums: IGalleryAlbum[] = [];

  heroBackgroundImage = 'assets/images/background/hero-background.jpeg';
  heroGradient = 'linear-gradient(rgba(30, 93, 123, 0.85), rgba(22, 74, 97, 0.9))';

  services: IService[] = [
    {
      title: 'Установка сантехнического люка',
      description:
        'Профессиональная установка люков различных размеров для доступа к коммуникациям',
      icon: '🚪',
      image: '',
    },
    {
      title: 'Расширение отверстия под люк',
      description: 'Аккуратное расширение проема с сохранением целостности стены',
      icon: '🔧',
      image: '',
    },
    {
      title: 'Снятие плитки с сохранением и без',
      description: 'Демонтаж плитки любой сложности с возможностью сохранения материала',
      icon: '🔨',
      image: '',
    },
    {
      title: 'Восстановление плитки в исходное состояние',
      description: 'Реставрация плитки после ремонта коммуникаций',
      icon: '✨',
      image: '',
    },
    {
      title: 'Монтаж плитки на магнитах',
      description: 'Современное решение для быстрого доступа к трубам',
      icon: '🧲',
      image: '',
    },
    {
      title: 'Оперативный доступ к протечке труб',
      description: 'Срочный выезд и быстрое вскрытие для устранения аварий',
      icon: '⚡',
      image: '',
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
      image: 'assets/images/background/step-1.jpeg',
    },
    {
      step: '2',
      title: 'Подготовка и демонтаж',
      description: 'Аккуратное вскрытие с минимальным повреждением',
      image: 'assets/images/background/step-2.jpeg',
    },
    {
      step: '3',
      title: 'Ремонт коммуникаций',
      description: 'Устранение проблемы, замена труб или установка люка',
      image: 'assets/images/background/step-3.jpeg',
    },
    {
      step: '4',
      title: 'Восстановление отделки',
      description: 'Возвращаем плитку в идеальное состояние',
      image: 'assets/images/background/step-4.jpeg',
    },
  ];

  ngOnInit(): void {
    this.loadGalleryAlbums();
  }

  private loadGalleryAlbums(): void {
    this.galleryAlbums = this.galleryService.getGalleryAlbums();
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
