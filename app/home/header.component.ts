import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: 'app/home/header.component.html',
  styles: ['.small{font-size:15px;}']
})
export class HeaderComponent {
  public pageTitle: string = 'EcommercE';
  

}
