import { Injectable } from '@angular/core';

/**
 * Сервис для работы с изображениями
 */
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  getImageUrl(path: string): string {
    if (path.startsWith('assets/')) {
      return path;
    }
    return `assets/images/${path}`;
  }

  getGalleryImage(albumName: string, imageName: string): string {
    return this.getImageUrl(`gallery/${albumName}/${imageName}`);
  }

  async checkImageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
}
