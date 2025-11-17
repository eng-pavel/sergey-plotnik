import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews implements AfterViewInit, OnDestroy {
  @ViewChild('reviewsTrack') reviewsTrack!: ElementRef<HTMLDivElement>;

  private autoPlayInterval: any;
  private currentIndex = 0;
  private totalReviews = 3;

  ngAfterViewInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextReview();
    }, 5000); // Меняем каждые 5 секунд
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private nextReview(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalReviews;
    this.scrollToReview(this.currentIndex);
  }

  private scrollToReview(index: number): void {
    const track = this.reviewsTrack.nativeElement;
    const cardWidth = track.offsetWidth * 0.85;
    const scrollPosition = index * (cardWidth + 16); // 16px gap

    track.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }

  // Останавливаем автоплей когда пользователь начинает скроллить
  onTrackScroll(): void {
    this.stopAutoPlay();

    // Перезапускаем автоплей через 10 секунд после последнего взаимодействия
    setTimeout(() => {
      this.startAutoPlay();
    }, 10000);
  }
}
