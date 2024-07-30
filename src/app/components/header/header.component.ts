import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isItemClick: boolean = false;
  isItemIcon:string = 'li li-list'
  

  constructor() { }

  ngOnInit(): void {
  }

  menuChange(): void{
    this.isItemClick =! this.isItemClick;
    this.isItemIcon = this.isItemIcon ? 'li li-x' : 'li li-list';
  }

  menuClose(){
    this.isItemClick = false;
    this.isItemIcon = 'li li-list';
  }

}
