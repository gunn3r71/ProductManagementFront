import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent{
  hasError: boolean;
  public message: string;

  constructor() { }

  showErrorMessage(message: string){
    this.hasError = true;
    this.message = message;

    setTimeout(() => {
      this.hasError = false;
      this.message = null;
    },5000);
  }
}
