import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }
  
  name = "Mohamed AHARRAT";
  neptun_code = "AHR9OI";
  email = "mohamedaharrat1@gmail.com";
  
  ngOnInit(): void {
  }

}
