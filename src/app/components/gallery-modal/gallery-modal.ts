import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  signal,
} from '@angular/core';
import { IGalleryAlbum, IGalleryImage } from '../../models/albums.interface';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery-modal',
  imports: [GalleriaModule],
  templateUrl: './gallery-modal.html',
  styleUrl: './gallery-modal.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryModal {
  @Input() set visible(value: boolean) {
    this._visible.set(value);
    if (value) {
      // При открытии модалки добавляем обработчик клавиатуры
      setTimeout(() => {
        this.setupKeyboardNavigation();
      });
    }
  }
  get visible(): boolean {
    return this._visible();
  }

  @Input() set albums(value: IGalleryAlbum[]) {
    this._albums.set(value);
  }
  get albums(): IGalleryAlbum[] {
    return this._albums();
  }

  @Input() set currentAlbumId(value: string | null) {
    this._currentAlbumId.set(value);
    this.activeIndex.set(0);
  }
  get currentAlbumId(): string | null {
    return this._currentAlbumId();
  }

  @Input() set initialImageIndex(value: number) {
    this.activeIndex.set(value);
  }

  @Output() close = new EventEmitter<void>();

  private _visible = signal(false);
  private _albums = signal<IGalleryAlbum[]>([]);
  private _currentAlbumId = signal<string | null>(null);
  activeIndex = signal(0);

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.setupKeyboardNavigation();
  }

  ngOnDestroy() {
    // Убираем обработчики при уничтожении компонента
    this.removeKeyboardNavigation();
  }

  // Обработчик клавиатуры для всей страницы
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.visible) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;

      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;

      case 'Escape':
        event.preventDefault();
        this.onClose();
        break;

      case 'Home':
        event.preventDefault();
        this.goToFirst();
        break;

      case 'End':
        event.preventDefault();
        this.goToLast();
        break;

      // Цифры для быстрой навигации
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          const index = parseInt(event.key) - 1;
          if (index < this.currentImages.length) {
            this.activeIndex.set(index);
          }
        }
        break;
    }
  }

  private setupKeyboardNavigation(): void {
    // Дополнительная настройка, если нужна
  }

  private removeKeyboardNavigation(): void {
    // Очистка, если нужна
  }

  get currentAlbum(): IGalleryAlbum | null {
    return this.albums.find((album) => album.id === this.currentAlbumId) || null;
  }

  get currentImages(): IGalleryImage[] {
    return this.currentAlbum?.images || [];
  }

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('gallery-modal')) {
      this.onClose();
    }
  }

  onActiveIndexChange(index: number): void {
    this.activeIndex.set(index);
  }

  next(): void {
    if (this.currentImages.length <= 1) return;

    const newIndex = (this.activeIndex() + 1) % this.currentImages.length;
    this.activeIndex.set(newIndex);
  }

  prev(): void {
    if (this.currentImages.length <= 1) return;

    const newIndex =
      this.activeIndex() === 0 ? this.currentImages.length - 1 : this.activeIndex() - 1;
    this.activeIndex.set(newIndex);
  }

  goToFirst(): void {
    this.activeIndex.set(0);
  }

  goToLast(): void {
    this.activeIndex.set(this.currentImages.length - 1);
  }

  // Метод для перехода к конкретному изображению
  goToImage(index: number): void {
    if (index >= 0 && index < this.currentImages.length) {
      this.activeIndex.set(index);
    }
  }
}
