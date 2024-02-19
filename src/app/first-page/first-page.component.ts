import { AfterViewInit, Component, Directive, DoCheck , ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstPageComponent implements OnChanges, OnInit{
  
  @Input() isVisible : boolean = false;   


   
  
  ngOnInit(): void {
   
  }
  

  ngOnChanges() {
    // if (this.isVisible) console.log("Está visivel")  
    // else console.log("não está")

    // if (this.isVisible) {
    //   this.renderer.addClass(this.myPhoto, 'my-photo-animation');
    // } else {
    //   this.renderer.removeClass(this.myPhoto, 'my-photo-animation');
    // }
  }
  
}
