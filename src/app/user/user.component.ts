import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @Input() nameUser;
  name: string="usuario";
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies : string[];
  constructor() {
    this.age=28;
    this.address = {
      street:"28 ad",
      city: "londres"
    };
    this.hobbies= ['swimming', 'read']
  }
}
