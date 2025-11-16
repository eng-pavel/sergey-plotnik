import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IAlbumClickEvent, IGalleryAlbum } from '../../models/albums.interface';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  @Input() albums: IGalleryAlbum[] = [];
  @Output() albumClick = new EventEmitter<IAlbumClickEvent>();

  onAlbumClick(album: IGalleryAlbum): void {
    const clickEvent: IAlbumClickEvent = {
      albumId: album.id,
      initialImageIndex: 0,
    };
    this.albumClick.emit(clickEvent);
  }

  trackByAlbumId(index: number, album: IGalleryAlbum): string {
    return album.id;
  }
}
