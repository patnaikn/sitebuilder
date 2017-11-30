import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.less']
})
export class ConsumerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewChecked() {
    $(".carousel").carousel();
    $(".carousel.carousel-slider").carousel({fullWidth:true});
  }

}
