export interface IService {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface IProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface IGalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface IGalleryAlbum {
  id: string;
  title: string;
  preview: string; // превью для сетки
  description: string;
  images: IGalleryImage[]; // все фото альбома
}

export interface IAlbumClickEvent {
  albumId: string;
  initialImageIndex: number;
}
