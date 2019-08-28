import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

list: Array<number>= [1, 2]
 Ende: number= 10;

constructor() { }
  ngOnInit() {
  }
zaehle() {
  this.list=[];
  for(let i=0; i<=this.Ende;i=i++ ) {
    this.list.push(i)
  }
}
}