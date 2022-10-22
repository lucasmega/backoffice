import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('main') elementRefMain: ElementRef | undefined;
  @ViewChild('sidebar') elementRefSideBar: ElementRef | undefined;
  @ViewChild('openNav') elementRefOpenNav: ElementRef | undefined;


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  public openNav(): void {
    this.renderer.setStyle(this.elementRefMain?.nativeElement, 'marginLeft', '25%');
    this.renderer.setStyle(this.elementRefSideBar?.nativeElement, 'width', '25%');
    this.renderer.setStyle(this.elementRefSideBar?.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.elementRefOpenNav?.nativeElement, 'display', 'none');
  }

  public closeNav(): void {
    this.renderer.setStyle(this.elementRefMain?.nativeElement, 'marginLeft', '0%');
    this.renderer.setStyle(this.elementRefSideBar?.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.elementRefOpenNav?.nativeElement, 'display', 'inline-block');
  }

}
