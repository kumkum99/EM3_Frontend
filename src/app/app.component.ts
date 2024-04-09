import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public animatedTextArray: string[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    this.typeWriter(" to Our Hospital Shanti Clinic!😊");
  }
  
  typeWriter(text: string) {
    const interval = 200; // Adjust typing speed here (200ms)
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        this.animatedTextArray.push(text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval); // Stop the typing animation when typing completes
      }
    }, interval);
  }
}
