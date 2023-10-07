import { Component, OnInit } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

declare var $: any;

@Component({
  selector: 'app-car-subs',
  templateUrl: './car-subs.component.html',
  styleUrls: ['./car-subs.component.scss']
})
export class CarSubsComponent implements OnInit{

  constructor(   private redirectMenu : RedirectMenuService){
 
  }

  ngOnInit(){
    $(document).ready(function () {
      $("#demo").vc3dEye({
          imagePath: "../../assets/3Dimages/",// the location where you’ve put the images.
          totalImages: 50,// the number of images you have.
          imageExtension: "jpg" // the extension of the images. Make sure all the images have same extension.
      });
    });
  }
  percentageValue: number = 50; // Initial percentage value

  // Function to update the percentage value when the slider changes
  updatePercentage(event: Event): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.percentageValue = parseFloat(sliderValue);
  }

  isUpperVisible=true
  isLowerVisible=false
  onClick(){
    if (this.isUpperVisible){
      this.isUpperVisible=false
    }else{
      this.isUpperVisible=true
    }
  }

  onPress(){
    if (this.isLowerVisible){
      this.isLowerVisible=false
    }else{
      this.isLowerVisible=true
    }
  }

  inputtxt=''
  outline(event:Event){
    (<HTMLButtonElement>event.target).style.outlineColor=(<HTMLButtonElement>event.target).id
  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

}
