import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() visible = false;
  @Input() albums: IGalleryAlbum[] = [];
  @Input() currentAlbumId: string | null = null;
  @Input() initialImageIndex = 0;
  @Output() close = new EventEmitter<void>();

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
}
