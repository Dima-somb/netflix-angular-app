import {Component, ElementRef, TemplateRef, ViewChild, ViewRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @ViewChild('listRef') listRef!: ElementRef;

  sliderNumber = 0;
  isMoved = false;
  movieArray = [1,2,3,4,5,6,7,8,9,10];

  handleClick(direction: string) {
    let distance = this.listRef.nativeElement.getBoundingClientRect().x - 50;
    if (direction === "left" && this.sliderNumber > 0) {
      this.setSlideNumber(this.sliderNumber - 1);
      this.listRef.nativeElement.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && this.sliderNumber < 2) {
      this.setSlideNumber(this.sliderNumber + 1);
      this.listRef.nativeElement.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  private setSlideNumber(changeNumberOfSlides: number) {
    this.sliderNumber = changeNumberOfSlides;

  }
}
