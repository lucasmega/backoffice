import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public emitSidenav = new EventEmitter<boolean>();

  constructor() { }

  public sidenav(isSidenav: boolean) {
    this.emitSidenav.emit(isSidenav);
  }

}
