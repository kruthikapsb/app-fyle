import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent  {
  IsHidden = true;

onSelect(){
 this.IsHidden = !this.IsHidden;
}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
