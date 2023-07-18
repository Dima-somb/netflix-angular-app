import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  @Input() index!: number;

  @ViewChild('listItemRef') listItemRef!: ElementRef;
  isHovered = false;
  // setIsHovered: any

  setIsHovered(boolParam: boolean) {
    if(boolParam) {
      this.isHovered = boolParam;
     this.listItemRef.nativeElement.style.left = `${(this.index * 225) - 50 + (this.index * 2.5)}px`;
      console.log(this.listItemRef.nativeElement.style.left)
    }
  }
}
