import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isOpen = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  public toogle(): void {
    this.sharedService.toogle(this.isOpen = !this.isOpen);
  }

}
