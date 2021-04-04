import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'eds-button',
  template: `
    <button #edsButton [class]="customClass">{{label}}</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @Input() label: string | undefined;
  @Input() icon: string | undefined;
  @Input() labelHexColor: string | undefined;
  @Input() labelColor: string | undefined;
  @Input() bgHexColor: string | undefined;
  @Input() bgColor: string | undefined;
  @Input() customClass: string | undefined;

  @ViewChild('edsButton') edsButton: ElementRef | undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    const button = this.edsButton?.nativeElement;
    if (button) {
      console.log('button');
      if (this.labelHexColor) {
        button.style.color = this.labelHexColor;
      }
      if (this.labelColor) {
        button.style.color = 'color-' + this.labelColor;
      }
      if (this.bgHexColor) {
        button.style.backgroundColor = this.bgHexColor;
      }
      if (this.bgColor) {
        button.style.backgroundColor = 'background-' + this.bgColor;
      }
    }


  }

}
