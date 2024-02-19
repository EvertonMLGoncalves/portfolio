import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { KnownTechnologiesComponent } from './known-technologies/known-technologies.component';
import { WorksComponent } from './works/works.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  firstComponentVisibility = false;
  secondComponentVisibility = false;
  thirdComponentVisibility = false;
  fourthComponentVisibility = false;
   

  @ViewChild(FirstPageComponent, { read: ElementRef })
  firstComponent: ElementRef;
  @ViewChild(WhoIAmComponent, { read: ElementRef }) secondComponent: ElementRef;
  @ViewChild(KnownTechnologiesComponent, { read: ElementRef })
  thirdComponent: ElementRef;
  @ViewChild(WorksComponent, { read: ElementRef }) fourthComponent: ElementRef;
  
  constructor(
    firstComponent: ElementRef,
    secondComponent: ElementRef,
    thirdComponent: ElementRef,
    fourthComponent: ElementRef
    ) {
      this.firstComponent = firstComponent;
      this.secondComponent = secondComponent;
      this.thirdComponent = thirdComponent;
      this.fourthComponent = fourthComponent; 
      
    } 
    changeVisibility(bool : boolean, componentNumber : number) { 
      switch(componentNumber){ 
        case 1: 
          this.firstComponentVisibility = bool; 
          break;
        case 2: 
          this.secondComponentVisibility = bool; 
          break;
        case 3: 
          this.thirdComponentVisibility = bool;
          break;
        case 4: 
          this.fourthComponentVisibility = bool;
          break;
      }
    }
    private myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
          switch(entry.target.classList.value) { 
            case 'firstComponent': 
              this.changeVisibility(true, 1) 
              break; 
            case 'secondComponent': 
              this.changeVisibility(true, 2); 
              break;
            case 'thirdComponent':
              this.changeVisibility(true, 3);
              break;
            case 'fourthComponent': 
              this.changeVisibility(true, 4);
              break;
          }
         
        } else { 
          switch(entry.target.classList.value) { 
            case 'firstComponent': 
              this.changeVisibility(false, 1) 
              break; 
            case 'secondComponent': 
              this.changeVisibility(false, 2); 
              break;
            case 'thirdComponent':
              this.changeVisibility(false, 3);
              break;
            case 'fourthComponent': 
              this.changeVisibility(false, 4);
              break;
          }
        }
      });
    });
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // // Inicie a observação
    this.myObserver.observe(this.firstComponent.nativeElement); 
    this.myObserver.observe(this.secondComponent.nativeElement); 
    this.myObserver.observe(this.thirdComponent.nativeElement); 
    this.myObserver.observe(this.fourthComponent.nativeElement); 

  }
}
