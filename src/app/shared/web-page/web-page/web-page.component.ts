import {Component} from '@angular/core';

export enum webPageSize {
  ExtraSmall = 'main-section--extra-small',
  Small = 'main-section--small',
  Medium = 'main-section--medium',
  Large = 'main-section--large',
}

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent {
    constructor() {
  }
}
