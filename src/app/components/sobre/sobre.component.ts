import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
 
  constructor() { }
  tituloHeader="Conheça nossa história e como chegamos até aqui’"
  ngOnInit(): void {
  }

}
