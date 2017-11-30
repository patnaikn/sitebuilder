import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openActionTray(e){
    console.log(e);
    var parent = e.target.parentNode;
    var isActive = parent.classList.contains('active');
    if(isActive){
      parent.classList.remove('active');
    }else{
      parent.classList.add('active');
    }
    e.preventDefault();
    e.stopPropagation();
  }

}
