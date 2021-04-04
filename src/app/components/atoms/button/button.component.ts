import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [class]="color">{{text}}</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() icon: string | undefined;
  @Input() color: string | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

}
