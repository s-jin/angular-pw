import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;



  onButtonClick() {
    // console.log('Button was clicked');
    // console.log(this.includeLetters);
    // this.password = 'default pwd';
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  onChangeLength(value: string) {
    // tslint:disable-next-line:radix
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

}

