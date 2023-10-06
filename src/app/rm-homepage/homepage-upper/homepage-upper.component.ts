import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-homepage-upper',
  templateUrl: './homepage-upper.component.html',
  styleUrls: ['./homepage-upper.component.scss']
})
export class HomepageUpperComponent {
  box = document.getElementsByClassName('find-card-btn');
  clicked1=true
  clicked2=false
  switchCSS(){
    // this.box.style
    if(this.clicked1){
      this.clicked2=true
      this.clicked1=false
      console.log(this.clicked1,this.clicked2);
    }
  }

  switchCSS1(){
    if(this.clicked2){
      this.clicked2=false
      this.clicked1=true
      console.log(this.clicked1,this.clicked2);
    }
  }
  @Output() newEvent = new EventEmitter<Event>()
  close(){
    console.log(event,"hello");
  }
}
