import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { flatMap } from 'rxjs';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

declare var $: any;

@Component({
  selector: 'app-car-sub-redesign',
  templateUrl: './car-sub-redesign.component.html',
  styleUrls: ['./car-sub-redesign.component.scss']
})
export class CarSubRedesignComponent implements OnInit {
  myObserver;
  currentUrl: any;
  techDetailsParameter: any=0;
  specificaiton: any;
  EMI: any;
  colorList: string[] = [];
  // selectedColor: string = '45473D';

  constructor(private redirectMenu: RedirectMenuService,
    private router: Router, private renderer: Renderer2
  ) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("tech param", this.techDetailsParameter);
        }
      }
    });


  }


  carDetails = [
    {
      name: "2023 Toyota Glanza",
      engine_capacity: "2.8L/213",
      transmmission_type: "Mannual",
      Fuel_Type: "Petrol",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      },
      emi: '811',
    },
    {
      name: "2023 Toyota Fortuner",
      engine_capacity: "3.5L/213",
      transmmission_type: "Automatic",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        grey: "Grey"
      },
      emi: '2,778',

    },
    {
      name: "2023 Toyota Innova Crysta",
      engine_capacity: "2.2L/213",
      transmmission_type: "Automatic",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
      },
      emi: '1,400'
    },
    {
      name: "2023 Toyota Vellfire ",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    },
    {
      name: "2023 Toyota Urban Cruiser ",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    },
    {
      name: "Toyota Camry",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    },
    {
      name: "2023 Toyota Glanza",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    },
    {
      name: "2023 Toyota Fortuner",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    },
    {
      name: "2023 Toyota Innova Crysta",
      engine_capacity: "3.5L/213",
      transmmission_type: "Manual",
      Fuel_Type: "Diesel",
      color_options: {
        white: "White",
        black: "Black",
        blue: "Blue",
        grey: "Grey"
      }
    }

  ]

  ngOnInit() {
    const labels = document.querySelectorAll('label');

    labels.forEach(label => {
      this.renderer.listen(label, 'click', () => {
        const getValue = label.getAttribute('for');
        const goToParent = label.closest('.select-size');

        if (goToParent) {
          const getInputRadio = goToParent.querySelector(`input[id="${getValue}"]`);
          if (getInputRadio) {
            console.log(getInputRadio.getAttribute('id'));
          }
        }
      });
    });

    //======================================================
    this.filterDetails();
    $(document).ready(function () {
      $("#demo").vc3dEye({
        imagePath: "../../assets/3Dimages/",// the location where you’ve put the images.
        totalImages: 50,// the number of images you have.
        imageExtension: "jpg" // the extension of the images. Make sure all the images have same extension.
      });
    });
  }


  percentageValue: number = 35; // Initial percentage value
  amountCalc: number=this. techDetailsParameter.price * (35/100);
  
  

  // Function to update the percentage value when the slider changes
  updatePercentage(event: Event): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.percentageValue = parseFloat(sliderValue);
    this.amountCalc = Math.ceil(this. techDetailsParameter.price * (parseInt(sliderValue)/100));
  }

  isUpperVisible = true
  isLowerVisible = false
  onClick() {
    if (this.isUpperVisible) {
      this.isUpperVisible = false
    } else {
      this.isUpperVisible = true
    }
  }

  isVariantExpand = false;

  expandVariant() {
    if (this.isVariantExpand) {
      this.isVariantExpand = false
    } else {
      this.isVariantExpand = true
    }
  }



  getColorList(spec: any) {
    let colors = Object.keys(spec.color_options).map(key => spec.color_options[key]);
    let flattenedColor = [].concat(...colors);
    this.colorList.push(...flattenedColor);
  }

  filterDetails() {
    this.specificaiton = this.carDetails.find((element) => element.name == this.techDetailsParameter.name);
    this.getColorList(this.specificaiton);
  }

  onPress() {
    if (this.isLowerVisible) {
      this.isLowerVisible = false
    } else {
      this.isLowerVisible = true
    }
  }

  outline(event: Event) {
    (<HTMLButtonElement>event.target).style.outlineColor = (<HTMLButtonElement>event.target).id
  }



  // outline(event: Event, color: string) {
  //   this.selectedColor = color; // Update the selected color
  //   const buttons = document.querySelectorAll('.redbtn.btn') as NodeListOf<HTMLButtonElement>;
  //   buttons.forEach(button => {
  //     button.style.outlineColor = button.id === color ? color : '#ffffff'; // Set outline color based on selected color
  //   });
  // }


  // selectedColor: string = '45473D';

// outline(color: string) {
//   this.selectedColor = color;
// }

  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  onSubmit() {
    this.redirect('apply-now-flow-1');
  }

applyNow(){
  let data = {
    image : this.techDetailsParameter.imgUrl,
    name : this.techDetailsParameter.name,
    price : this.techDetailsParameter.price
  }
  console.log("data->",data);
  
  this.redirectMenu.redirectWithdata('apply-now-flow-1',data);
}

  calculateEMI(Price: string) {
    let price = Price.replace(/,/g, '');
    let totalCarPrice: number = parseFloat(price);
    let annualInterestRate: number = 7;
    let tenureInYears: number = 2;
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const numberOfMonths = tenureInYears * 12;

    const roughemi = (totalCarPrice * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    // console.log(emi.toFixed(0));
    const emi = Math.trunc(roughemi);
    return emi;
  }

  border1: Boolean = false
  border2: Boolean = false

  addBorder() {
    let elem = document.getElementById('speedometer') as HTMLElement;
    if (this.border1 == false) {
      elem.setAttribute("style", "border:1px solid black,height: 3rem,width: 3rem,margin-right: 20px;")
      this.border1 = true
    }
    else {
      elem.setAttribute("style", "border:none")
      this.border1 = false
    }
  }

  addBorder2() {
    let elem = document.getElementById('engine') as HTMLElement;
    if (this.border2 == false) {
      elem.setAttribute("style", "border:1px solid black,height: 3rem,width: 3rem,margin-right: 20px;")
      this.border2 = true
    }
    else {
      elem.setAttribute("style", "border:none")
      this.border2 = false
    }
  }
}
