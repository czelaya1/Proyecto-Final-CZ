import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isItemClick = false;
  
  menuChange(): void{
    this.isItemClick =! this.isItemClick;
  }

  public urls : string[] = [
    'Inicio',
    'Organización',
    'Transparencia',
    'Carta',
    'Contacto'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
