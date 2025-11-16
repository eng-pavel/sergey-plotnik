import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IGalleryAlbum, IImageClickEvent } from '../../models/albums.interface';

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
  @Output() imageClick = new EventEmitter<IImageClickEvent>();

  onImageClick(album: IGalleryAlbum): void {
    const clickEvent: IImageClickEvent = {
      image: album.image,
      title: album.title,
    };
    this.imageClick.emit(clickEvent);
  }
}
