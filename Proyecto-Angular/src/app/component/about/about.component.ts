import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css',"../../../assets/styles.css"]
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;


  constructor() {
this.title = "Deivid Paez";
this.subtitle = "Desarrollador Web";
this.web = "Deivid11pdp1@gmail.com"

   }

  ngOnInit(): void {
  }

}
