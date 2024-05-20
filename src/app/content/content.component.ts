import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
laptop:string='src/assets/02_ideapad_1_hero_front_facing_jd-2048x2048_7_1.jpg.webp';
screen:string='src/assets/2E-B2423B-01.UA-1.jpg';
components:string='src/assets/9f4bd65e876698ae3ad1208f19e98c58.png';
details:string='src/assets/16_1500.jpg';
keyboards:string='src/assets/52398_004.JPG';
gaming:string='src/assets/103613.600.png';
printer='src/assets/images-6.jpeg';
router='src/assets/marshrutizator-router-tp-link-archer-ax12-ax1500-wi-fi-6-archer-ax12.jpg';
cabels='src/assets/originalnyy-data-kabel-samsung-fast-charge-type-c-ep-dn930cwe-58577429337633_small11.jpg';
pads='src/assets/SU0691475-0.jpg';
PC;
constructor(){
  this.PC='src/assets/3349387723_w640_h640_igrovoj-pk-bu.jpg.webp';
}
ReturnHeadPhones(){
  return 'src/assets/Apple-AirPods-Pro-2-35-White-03-600x600.jpg.webp';
}

}
