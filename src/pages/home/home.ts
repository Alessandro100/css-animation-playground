import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

import { NavController } from 'ionic-angular';
import anime from 'animejs'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  showText = false;

  constructor(public navCtrl: NavController,
              public cdRef: ChangeDetectorRef,
              public ngZone: NgZone) {

  }

  ngOnInit(){
    let animationDuration = 3000;

   var ani_me3:any = anime({
      targets: '.circle',
      translateX: -275,
      delay: 2000,
      duration: animationDuration,
      backgroundColor: [
        //{value: '#18B5B8'}, // Or #FFFFFF
        {value: '#FFFFFF'}
      ],
      //direction: 'reverse',
      //loop: true,
      elasticity: function(el, i, l) {
        return (200 + i * 200);
      }
    });

    setTimeout(_=>{//needed because promises of animejs are retarded with change detection
      this.done();
    }, animationDuration);
    
  }

  done(){
    this.showText = true;
    console.log("ayy lmao");
  }

}
