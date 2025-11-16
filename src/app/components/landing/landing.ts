import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { IService, IProcessStep, IGalleryAlbum } from '../../models/albums.interface';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';
import { Process } from '../process/process';
import { Reasons } from '../reasons/reasons';
import { Gallery } from '../gallery/gallery';
import { Reviews } from '../reviews/reviews';
import { Footer } from '../footer/footer';
import { Modal } from '../modal/modal';

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
    Modal,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
  modalVisible = false;
  currentImage = '';
  currentTitle = '';

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

  galleryAlbums: IGalleryAlbum[] = [
    {
      title: 'Установка люка в ванной',
      image:
        'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Аккуратная установка сантехнического люка с сохранением плитки',
    },
    {
      title: 'Замена труб водоснабжения',
      image:
        'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Полная замена коммуникаций с минимальным повреждением отделки',
    },
    {
      title: 'Ремонт санузла с плиткой',
      image:
        'https://images.unsplash.com/photo-1651544861863-e834ba8496e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Восстановление плитки после доступа к трубам',
    },
    {
      title: 'Современный санузел',
      image:
        'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Установка люка в современном интерьере',
    },
    {
      title: 'Укладка плитки на магнитах',
      image:
        'https://images.unsplash.com/photo-1703868669362-562283170216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Инновационное решение для легкого доступа',
    },
    {
      title: 'Расширение люка',
      image:
        'https://images.unsplash.com/photo-1678924133506-7508daa13c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      description: 'Увеличение проема под новый размер люка',
    },
  ];

  openModal(image: string, title: string): void {
    this.currentImage = image;
    this.currentTitle = title;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }
}
