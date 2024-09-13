import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont-projecion',
  templateUrl: './cont-projecion.component.html',
  styleUrls: ['./cont-projecion.component.css']
})
export class ContProjecionComponent implements OnInit {
  public salesProducts= [
    {id:1, name:'Acs', price: '100'},
    {id:1, name:'Phones', price: '1500'},
    {id:1, name:'Fasions', price: '1200'},
    {id:1, name:'Electronics', price: '6800'}

  ]

  public topProducts= [
    {id:1, name:'Phone', price: '100'},
    {id:1, name:'Fashion', price: '4500'},
    {id:1, name:'Acs', price: '1200'},
    {id:1, name:'Electronics', price: '8500'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
