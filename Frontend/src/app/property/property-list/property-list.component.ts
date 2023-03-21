import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> =[
  {
      "Id": 1,
      "Name":"Saleem House",
      "Type": "House",
      "Price": 12000
  },
  {
    "Id": 1,
    "Name":"Saleem House",
    "Type": "House",
    "Price": 12000
  },
  {
  "Id": 2,
  "Name":"Kaka Villa",
  "Type": "Villa",
  "Price": 11000
  },
  {
    "Id": 3,
    "Name":"Solitude",
    "Type": "Solitude Standard",
    "Price": 13000
  },
]

  constructor() { }


  ngOnInit() {
  }

}
