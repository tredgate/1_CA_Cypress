//create random username generator with 10 characters combination of letters and numbers and special characters
//create random password generator with 10 characters combination of letters and numbers and special characters
//create random email generator with 10 characters combination of letters and numbers and special characters

// Path: cypress/e2e/pmtool/generator.js
export class Generator {
  constructor() {
    this.randomString =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    this.randomNumber = Math.floor(Math.random() * 1000000000);
    this.randomEmail =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15) +
      "@gmail.com";
  }

  get randomString() {
    return this.randomString;
  }

  get randomNumber() {
    return this.randomNumber;
  }

  get randomEmail() {
    return this.randomEmail;
  }

  testGenerator() {
    console.log(this.randomString);
    console.log(this.randomNumber);
    console.log(this.randomEmail);
  }
}
