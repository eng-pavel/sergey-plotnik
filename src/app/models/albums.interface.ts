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

export interface IGalleryAlbum {
  title: string;
  image: string;
  description: string;
}

export interface IImageClickEvent {
  image: string;
  title: string;
}
