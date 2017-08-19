import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-designer',
  templateUrl: 'designer.html'
})
export class DesignerPage {
  cars: Object[];

  constructor(public navController: NavController) {
    this.cars = [{
      name: 'Follow-on',
      image: 'baby_f2.png',
      zoom: 'cover'
    }, {
      name: 'Infant',
      image: 'baby_f1.png',
      zoom: 'cover'
    }, {
      name: 'Toddler',
      image: 'baby_f3.png',
      zoom: 'cover'
    }]
  }

}
