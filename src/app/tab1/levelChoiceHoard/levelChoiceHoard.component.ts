import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../magicItem';
import { ArtObject } from '../artObject';
import { Gems } from '../gems';

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

  hoardLootFour(random) {
    let gems: Gems = {nb: 0, value: 0};
    let artObject: ArtObject = {nb: 0, value: 0};
    let magicItem: MagicItem = {nb: 0, type: ''};

    if (random > 0 && random <= 6) {
      return;
    } else if (random > 6 && random <= 16) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      return;
    } else if (random > 16 && random <= 26) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      return;
    } else if (random > 26 && random <= 36) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      return;
    } else if (random > 36 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'A';
      return;
    } else if (random > 44 && random <= 52) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'A';
      return;
    } else if (random > 52 && random <= 60) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'A';
      return;
    } else if (random > 60 && random <= 65) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'B';
      return;
    } else if (random > 65 && random <= 70) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'B';
      return;
    } else if (random > 70 && random <= 75) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'B';
      return;
    } else if (random > 75 && random <= 78) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'C';
      return;
    } else if (random > 78 && random <= 80) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'C';
      return;
    } else if (random > 80 && random <= 85) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'C';
      return;
    } else if (random > 85 && random <= 92) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'F';
      return;
    } else if (random > 92 && random <= 97) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'F';
      return;
    } else if (random > 97 && random <= 99) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'G';
      return;
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'G';
      return;
    }
  }

  hoardLootTen(random) {
    let gems: Gems = {nb: 0, value: 0};
    let artObject: ArtObject = {nb: 0, value: 0};
    let magicItem: MagicItem = {nb: 0, type: ''};

    if (random > 0 && random <= 4) {
      return;
    } else if (random > 4 && random <= 10) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      return;
    } else if (random > 10 && random <= 16) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      return;
    } else if (random > 16 && random <= 22) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 100;
      return;
    } else if (random > 22 && random <= 28) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      return;
    } else if (random > 28 && random <= 32) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'A';
      return;
    } else if (random > 32 && random <= 36) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'A';
      return;
    } else if (random > 36 && random <= 40) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 100;
      magicItem.type = 'A';
      return;
    } else if (random > 40 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'A';
      return;
    } else if (random > 44 && random <= 49) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'B';
      return;
    } else if (random > 49 && random <= 54) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'B';
      return;
    } else if (random > 54 && random <= 59) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'B';
      return;
    } else if (random > 59 && random <= 63) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'B';
      return;
    } else if (random > 63 && random <= 66) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'C';
      return;
    } else if (random > 66 && random <= 69) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'C';
      return;
    } else if (random > 69 && random <= 72) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'C';
      return;
    } else if (random > 72 && random <= 74) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'C';
      return;
    } else if (random > 74 && random <= 76) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 25;
      magicItem.type = 'D';
      return;
    } else if (random > 76 && random <= 78) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 50;
      magicItem.type = 'D';
      return;
    } else if (random === 79) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 100;
      magicItem.type = 'D';
      return;
    } else if (random === 80) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 250;
      magicItem.type = 'D';
      return;
    } else if (random > 80 && random <= 84) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'F';
      return;
    } else if (random > 84 && random <= 88) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'F';
      return;
    } else if (random > 88 && random <= 91) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'F';
      return;
    } else if (random > 91 && random <= 94) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'F';
      return;
    } else if (random > 94 && random <= 96) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'G';
      return;
    } else if (random > 96 && random <= 98) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'G';
      return;
    } else if (random === 99) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 100;
      magicItem.type = 'H';
      return;
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 250;
      magicItem.type = 'H';
      return;
    }
  }
}
