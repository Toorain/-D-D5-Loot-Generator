import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../magicItem';
import { ArtObject } from '../artObject';
import { Gems } from '../gems';
import { GemsDb } from '../gemsObject.model';
import { GemsService } from '../../services/gems.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-levelChoiceHoard',
  templateUrl: './levelChoiceHoard.component.html',
  styleUrls: ['./levelChoiceHoard.component.css']
})
export class LevelChoiceHoardComponent implements OnInit {
  toFourIsChecked = false;
  toTenIsChecked = false;
  toSixteenIsChecked = false;
  toMoreIsChecked = false;

  copperPiece = 0;
  silverPiece = 0;
  electrumPiece = 0;
  goldPiece = 0;
  platinumPiece = 0;

  errorMessage = '';

  isVisible = false;

  private gemSub: Subscription;

  public gemsDb: GemsDb[] = [];


  constructor(private gemsService: GemsService) {}


  ngOnInit() {
    this.gemSub = this.gemsService.stuff$.subscribe(
        (gems) => {
          this.gemsDb = gems;
        }
    );
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
    const random: number = Math.floor((Math.random() * 100) + 1);
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
     * Then we check which level is selected and roll according to it.
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
        this.hoardLootFour(random);
      } else if (this.toTenIsChecked) {
        this.hoardLootTen(random);
      } else if (this.toSixteenIsChecked) {
        this.toSixteenRoll(random);
      } else if (this.toMoreIsChecked) {
        this.toMoreRoll(random);
      }
      this.errorMessage = '';
    }
  }

  toFourRollCoin(random) {
    let d6totalDieOne = 0;
    let d6totalDieTwo = 0;
    let d6totalDieThree = 0;

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

  toTenRollCoin(random) {
    let d6totalDieOne = 0;
    let d6totalDieTwo = 0;
    let d6totalDieThree = 0;
    let d6totalDieFour = 0;

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
    let d6totalDieOne = 0;
    let d6totalDieTwo = 0;

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
    let d6totalDieOne = 0;
    let d6totalDieTwo = 0;

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
    this.toFourRollCoin(random);
    const gems: Gems = {nb: 0, value: 0};
    const artObject: ArtObject = {nb: 0, value: 0};
    const magicItem: MagicItem = {nb: 0, type: ''};

    if (random > 0 && random <= 6) {
    } else if (random > 6 && random <= 16) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
    } else if (random > 16 && random <= 26) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
    } else if (random > 26 && random <= 36) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
    } else if (random > 36 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'A';
    } else if (random > 44 && random <= 52) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'A';
    } else if (random > 52 && random <= 60) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'A';
    } else if (random > 60 && random <= 65) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'B';
    } else if (random > 65 && random <= 70) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'B';
    } else if (random > 70 && random <= 75) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'B';
    } else if (random > 75 && random <= 78) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 10;
      magicItem.type = 'C';
    } else if (random > 78 && random <= 80) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'C';
    } else if (random > 80 && random <= 85) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'C';
    } else if (random > 85 && random <= 92) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'F';
    } else if (random > 92 && random <= 97) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'F';
    } else if (random > 97 && random <= 99) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'G';
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'G';
    }
    this.gemsService.getGems(gems.value);
    if (gems.value === 0) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
    return;
  }

  hoardLootTen(random) {
    this.toTenRollCoin(random);

    const gems: Gems = {nb: 0, value: 0};
    const artObject: ArtObject = {nb: 0, value: 0};
    const magicItem: MagicItem = {nb: 0, type: ''};

    if (random > 0 && random <= 4) {
    } else if (random > 4 && random <= 10) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
    } else if (random > 10 && random <= 16) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
    } else if (random > 16 && random <= 22) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 100;
    } else if (random > 22 && random <= 28) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
    } else if (random > 28 && random <= 32) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'A';
    } else if (random > 32 && random <= 36) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 50;
      magicItem.type = 'A';
    } else if (random > 36 && random <= 40) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      gems.value = 100;
      magicItem.type = 'A';
    } else if (random > 40 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'A';
    } else if (random > 44 && random <= 49) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'B';
    } else if (random > 49 && random <= 54) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'B';
    } else if (random > 54 && random <= 59) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'B';
    } else if (random > 59 && random <= 63) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'B';
    } else if (random > 63 && random <= 66) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'C';
    } else if (random > 66 && random <= 69) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'C';
    } else if (random > 69 && random <= 72) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'C';
    } else if (random > 72 && random <= 74) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'C';
    } else if (random > 74 && random <= 76) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 25;
      magicItem.type = 'D';
    } else if (random > 76 && random <= 78) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 50;
      magicItem.type = 'D';
    } else if (random === 79) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 100;
      magicItem.type = 'D';
    } else if (random === 80) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 250;
      magicItem.type = 'D';
    } else if (random > 80 && random <= 84) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 25;
      magicItem.type = 'F';
    } else if (random > 84 && random <= 88) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 50;
      magicItem.type = 'F';
    } else if (random > 88 && random <= 91) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'F';
    } else if (random > 91 && random <= 94) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'F';
    } else if (random > 94 && random <= 96) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 4) + 1);
      }
      gems.value = 100;
      magicItem.type = 'G';
    } else if (random > 96 && random <= 98) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        magicItem.nb += Math.floor((Math.random() * 6) + 1);
      }
      artObject.value = 250;
      magicItem.type = 'G';
    } else if (random === 99) {
      for (let i = 1; i <= 3; i++) {
        gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      magicItem.nb = 1;
      gems.value = 100;
      magicItem.type = 'H';
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        artObject.value += Math.floor((Math.random() * 4) + 1);
      }
      magicItem.nb = 1;
      artObject.value = 250;
      magicItem.type = 'H';
    }
    this.gemsService.getGems(gems.value);
  }

  onProductClicked(id: string) {
  }

}
