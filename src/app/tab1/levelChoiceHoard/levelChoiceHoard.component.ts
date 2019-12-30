import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelChoiceHoard',
  templateUrl: './levelChoiceHoard.component.html',
  styleUrls: ['./levelChoiceHoard.component.css']
})
export class LevelChoiceHoardComponent implements OnInit {
  toFourIsChecked: boolean = false;
  toTenIsChecked: boolean = false;
  toSixteenIsChecked: boolean = false;
  toMoreIsChecked: boolean = false;

  copperPiece: number = 0;
  silverPiece: number = 0;
  electrumPiece: number = 0;
  goldPiece: number = 0;
  platinumPiece: number = 0;

  errorMessage: string = '';

  constructor() {}

  ngOnInit() {
  }

  radioSelected(event) {
    if (event.detail.value === 'toFourIsChecked') {
      this.toTenIsChecked = false;
      this.toSixteenIsChecked = false;
      this.toMoreIsChecked = false;
      return (this.toFourIsChecked = event.detail.checked);
    } else if (event.detail.value === 'toTenIsChecked') {
      this.toFourIsChecked = false;
      this.toSixteenIsChecked = false;
      this.toMoreIsChecked = false;
      return (this.toTenIsChecked = event.detail.checked);
    } else if (event.detail.value === 'toSixteenIsChecked') {
      this.toFourIsChecked = false;
      this.toTenIsChecked = false;
      this.toMoreIsChecked = false;
      return (this.toSixteenIsChecked = event.detail.checked);
    } else if (event.detail.value === 'toMoreIsChecked') {
      this.toFourIsChecked = false;
      this.toTenIsChecked = false;
      this.toSixteenIsChecked = false;
      return (this.toMoreIsChecked = event.detail.checked);
    }
  }

  rollLevel() {
    let random: number = Math.floor((Math.random() * 100) + 1);
    //
    /**
     * This will reset the amount of money between two rolls
     */

    this.copperPiece = 0;
    this.silverPiece = 0;
    this.electrumPiece = 0;
    this.goldPiece = 0;
    this.platinumPiece = 0;
    /**
     * We check if any level is selected, if not we send an alert
     * Then we check which level is selected and roll accordind to it.
     */
    if (
      this.toFourIsChecked === false
      && this.toTenIsChecked === false
      && this.toSixteenIsChecked === false
      && this.toMoreIsChecked === false
    ) {
      return (this.errorMessage = 'Please select a level');
    } else {
      if (this.toFourIsChecked) {
        this.toFourRoll(random);
      } else if (this.toTenIsChecked) {
        this.toTenRoll(random);
      } else if (this.toSixteenIsChecked) {
        this.toSixteenRoll(random);
      } else if (this.toMoreIsChecked) {
        this.toMoreRoll(random);
      }
      this.errorMessage = '';
    }
  }

  toFourRoll(random) {
    let d6totalDieOne: number = 0;
    let d6totalDieTwo: number = 0;
    let d6totalDieThree: number = 0;

    if (random > 0 && random <= 100) {
      for (let i = 1; i <= 6; i++) {
        d6totalDieOne += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieOne = d6totalDieOne * 100;
      this.copperPiece = d6totalDieOne;
      for (let i = 1; i <= 3; i++) {
        d6totalDieTwo += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieTwo = d6totalDieTwo * 100;
      this.silverPiece = d6totalDieTwo;
      for (let i = 1; i <= 2; i++) {
        d6totalDieThree += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieThree = d6totalDieThree * 10;
      this.goldPiece = d6totalDieThree;
    }
    return;
  }

  toTenRoll(random) {
    let d6totalDieOne: number = 0;
    let d6totalDieTwo: number = 0;
    let d6totalDieThree: number = 0;
    let d6totalDieFour: number = 0;

    if (random > 0 && random <= 100) {
      for (let i = 1; i <= 2; i++) {
        d6totalDieOne += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieOne = d6totalDieOne * 100;
      this.copperPiece = d6totalDieOne;
      for (let i = 1; i <= 2; i++) {
        d6totalDieTwo += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieTwo = d6totalDieTwo * 1000;
      this.silverPiece = d6totalDieTwo;
      for (let i = 1; i <= 6; i++) {
        d6totalDieThree += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieThree = d6totalDieThree * 100;
      this.goldPiece = d6totalDieThree;
      for (let i = 1; i <= 3; i++) {
        d6totalDieFour += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieFour = d6totalDieFour * 10;
      this.platinumPiece = d6totalDieFour;
    }
    return;
  }

  toSixteenRoll(random) {
    let d6totalDieOne: number = 0;
    let d6totalDieTwo: number = 0;

    if (random > 0 && random <= 100) {
      for (let i = 1; i <= 4; i++) {
        d6totalDieOne += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieOne = d6totalDieOne * 1000;
      this.goldPiece = d6totalDieOne;
      for (let i = 1; i <= 5; i++) {
        d6totalDieTwo += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieTwo = d6totalDieTwo * 100;
      this.platinumPiece = d6totalDieTwo;
    }
    return;
  }

  toMoreRoll(random) {
    let d6totalDieOne: number = 0;
    let d6totalDieTwo: number = 0;

    if (random > 0 && random <= 100) {
      for (let i = 1; i <= 12; i++) {
        d6totalDieOne += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieOne = d6totalDieOne * 1000;
      this.goldPiece = d6totalDieOne;
      for (let i = 1; i <= 8; i++) {
        d6totalDieTwo += Math.floor((Math.random() * 6) + 1);
      }
      d6totalDieTwo = d6totalDieTwo * 1000;
      this.platinumPiece = d6totalDieTwo;
    }
    return;
  }
}
