import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont-projection-child',
  templateUrl: './cont-projection-child.component.html',
  styleUrls: ['./cont-projection-child.component.css']
})
export class ContProjectionChildComponent implements OnInit {
  @Input() products : []
  constructor() { }

  ngOnInit(): void {
  }

}
