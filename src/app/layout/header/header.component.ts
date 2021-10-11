import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.menuFunction();
  }
  // menuFunction() {
  //     var x = document.getElementById("myLinks");
  //     if (x.style.display === "block") {
  //       x.style.display = "none";
  //     } else {
  //       x.style.display = "block";
  //     }
  // }

}
