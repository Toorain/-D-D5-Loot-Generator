import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../magicItem';
import { Art } from '../art';
import { Gems } from '../gems';
import { GemsDb } from '../gemsObject.model';
import { GemsService } from '../../services/gems.service';
import { ArtObjectsService } from '../../services/art-objects.service';
import {Subscription} from 'rxjs';
import {ArtObjectModel} from '../artObject.model';

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


  gems: Gems = {nb: 0, value: 0};
  artObject: Art = {nb: 0, value: 0};
  magicItemOne: MagicItem = {nb: 0, type: ''};
  magicItemTwo: MagicItem = {nb: 0, type: ''};

  public errorMessage = '';

  itemSelected = 'none';

  private gemSub: Subscription;
  private artSub: Subscription;

  public gemsDb: GemsDb[] = [];
  public artDb: ArtObjectModel[] = [];


  constructor(private gemsService: GemsService, private artService: ArtObjectsService) {}


  ngOnInit() {
    this.gemSub = this.gemsService.stuff$.subscribe(
        (gems) => {
          this.gemsDb = gems;
        }
    );
    this.artSub = this.artService.stuff$.subscribe(
        (art) => {
          this.artDb = art;
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
        this.hoardSixteenRoll(random);
      } else if (this.toMoreIsChecked) {
        this.toMoreRollCoin(random);
      }
      this.errorMessage = '';
    }
  }

  checkGemsOrArt() {
    /**
     * This part is for display sake and calls the appropriate method according to the roll (Art Object of Gems)
     */
      if (this.gems.value === 0 && this.artObject.value === 0) {
        this.itemSelected = 'noItem';
      } else if (this.gems.value === 0) {
        this.itemSelected = 'artItem';
        this.artService.getArt(this.artObject.value);
        this.artDb = [];
      } else if (this.gems.value > 0) {
        this.itemSelected = 'gemItem';
        this.gemsService.getGems(this.gems.value);
        this.gemsDb = [];
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

  toSixteenRollCoin(random) {
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

  toMoreRollCoin(random) {
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

    this.gems = {nb: 0, value: 0};
    this.artObject = {nb: 0, value: 0};
    this.magicItemOne = {nb: 0, type: ''};

    if (random > 0 && random <= 6) {
    } else if (random > 6 && random <= 16) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 10;
    } else if (random > 16 && random <= 26) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
    } else if (random > 26 && random <= 36) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
    } else if (random > 36 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 10;
      this.magicItemOne.type = 'A';
    } else if (random > 44 && random <= 52) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'A';
    } else if (random > 52 && random <= 60) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'A';
    } else if (random > 60 && random <= 65) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 10;
      this.magicItemOne.type = 'B';
    } else if (random > 65 && random <= 70) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'B';
    } else if (random > 70 && random <= 75) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'B';
    } else if (random > 75 && random <= 78) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 10;
      this.magicItemOne.type = 'C';
    } else if (random > 78 && random <= 80) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'C';
    } else if (random > 80 && random <= 85) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'C';
    } else if (random > 85 && random <= 92) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'F';
    } else if (random > 92 && random <= 97) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'F';
    } else if (random > 97 && random <= 99) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'G';
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'G';
    }

    this.checkGemsOrArt();

    return;
  }

  hoardLootTen(random) {
    this.toTenRollCoin(random);

    this.gems = {nb: 0, value: 0};
    this.artObject = {nb: 0, value: 0};
    this.magicItemOne = {nb: 0, type: ''};

    if (random > 0 && random <= 4) {
    } else if (random > 4 && random <= 10) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
    } else if (random > 10 && random <= 16) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
    } else if (random > 16 && random <= 22) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 100;
    } else if (random > 22 && random <= 28) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
    } else if (random > 28 && random <= 32) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'A';
    } else if (random > 32 && random <= 36) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'A';
    } else if (random > 36 && random <= 40) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 100;
      this.magicItemOne.type = 'A';
    } else if (random > 40 && random <= 44) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'A';
    } else if (random > 44 && random <= 49) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'B';
    } else if (random > 49 && random <= 54) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'B';
    } else if (random > 54 && random <= 59) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 100;
      this.magicItemOne.type = 'B';
    } else if (random > 59 && random <= 63) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'B';
    } else if (random > 63 && random <= 66) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'C';
    } else if (random > 66 && random <= 69) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'C';
    } else if (random > 69 && random <= 72) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 100;
      this.magicItemOne.type = 'C';
    } else if (random > 72 && random <= 74) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'C';
    } else if (random > 74 && random <= 76) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb = 1;
      this.artObject.value = 25;
      this.magicItemOne.type = 'D';
    } else if (random > 76 && random <= 78) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb = 1;
      this.gems.value = 50;
      this.magicItemOne.type = 'D';
    } else if (random === 79) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb = 1;
      this.gems.value = 100;
      this.magicItemOne.type = 'D';
    } else if (random === 80) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb = 1;
      this.artObject.value = 250;
      this.magicItemOne.type = 'D';
    } else if (random > 80 && random <= 84) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 25;
      this.magicItemOne.type = 'F';
    } else if (random > 84 && random <= 88) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 50;
      this.magicItemOne.type = 'F';
    } else if (random > 88 && random <= 91) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 100;
      this.magicItemOne.type = 'F';
    } else if (random > 91 && random <= 94) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'F';
    } else if (random > 94 && random <= 96) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 100;
      this.magicItemOne.type = 'G';
    } else if (random > 96 && random <= 98) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'G';
    } else if (random === 99) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb = 1;
      this.gems.value = 100;
      this.magicItemOne.type = 'H';
    } else if (random === 100) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb = 1;
      this.artObject.value = 250;
      this.magicItemOne.type = 'H';
    }
    this.checkGemsOrArt();
    return;
  }

  hoardSixteenRoll(random) {
    this.toSixteenRollCoin(random);

    this.gems = {nb: 0, value: 0};
    this.artObject = {nb: 0, value: 0};
    this.magicItemOne = {nb: 0, type: ''};
    this.magicItemTwo = {nb: 0, type: ''};

    if (random > 0 && random <= 3) {
    } else if (random > 3 && random <= 6) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
    } else if (random > 6 && random <= 10) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
    } else if (random > 10 && random <= 12) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 500;
    } else if (random > 12 && random <= 15) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 1000;
    } else if (random > 15 && random <= 19) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'A';
      this.magicItemTwo.type = 'B';
    } else if (random > 19 && random <= 23) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 750;
      this.magicItemOne.type = 'A';
      this.magicItemTwo.type = 'B';
    } else if (random > 23 && random <= 26) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'A';
      this.magicItemTwo.type = 'B';
    } else if (random > 26 && random <= 29) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'A';
      this.magicItemTwo.type = 'B';
    } else if (random > 29 && random <= 35) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'C';
    } else if (random > 35 && random <= 40) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'C';
    } else if (random > 40 && random <= 45) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'C';
    } else if (random > 45 && random <= 50) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'C';
    } else if (random > 50 && random <= 54) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'D';
    } else if (random > 54 && random <= 58) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'D';
    } else if (random > 58 && random <= 62) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'D';
    } else if (random > 62 && random <= 66) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'D';
    } else if (random > 66 && random <= 68) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += 1;
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'E';
    } else if (random > 68 && random <= 70) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      this.artObject.value = 750;
      this.magicItemOne.type = 'E';
    } else if (random > 70 && random <= 72) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 500;
      this.magicItemOne.type = 'E';
    } else if (random > 72 && random <= 74) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'E';
    } else if (random > 74 && random <= 76) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 76 && random <= 78) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 78 && random <= 80) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 500;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 80 && random <= 82) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 1000;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 82 && random <= 85) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'H';
    } else if (random > 85 && random <= 88) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'H';
    } else if (random > 88 && random <= 90) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'H';
    } else if (random > 90 && random <= 92) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'H';
    } else if (random > 92 && random <= 94) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      this.artObject.value = 250;
      this.magicItemOne.type = 'I';
    } else if (random > 94 && random <= 96) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 500;
      this.magicItemOne.type = 'I';
    } else if (random > 96 && random <= 98) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'I';
    } else if (random > 98 && random <= 100) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'I';
    }
    this.checkGemsOrArt();
    return;
  }

  hoardMoreRoll(random) {
    this.toMoreRollCoin(random);

    this.gems = {nb: 0, value: 0};
    this.artObject = {nb: 0, value: 0};
    this.magicItemOne = {nb: 0, type: ''};
    this.magicItemTwo = {nb: 0, type: ''};

    if (random > 0 && random <= 2) {
    } else if (random > 2 && random <= 5) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 8) + 1);
      }
      this.magicItemOne.type = 'C';
      this.gems.value = 1000;
    } else if (random > 5 && random <= 8) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 10) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 8) + 1);
      }
      this.magicItemOne.type = 'C';
      this.artObject.value = 2500;
    } else if (random > 8 && random <= 11) {
      for (let i = 1; i <= 1; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 8) + 1);
      }
      this.magicItemOne.type = 'C';
      this.artObject.value = 7500;
    } else if (random > 11 && random <= 14) {
      for (let i = 1; i <= 1; i++) {
        this.gems.nb += Math.floor((Math.random() * 8) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 8) + 1);
      }
      this.magicItemOne.type = 'C';
      this.gems.value = 5000;
    } else if (random > 14 && random <= 22) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.type = 'D';
      this.gems.value = 1000;
    } else if (random > 22 && random <= 30) {
      for (let i = 1; i <= 1; i++) {
        this.artObject.nb += Math.floor((Math.random() * 10) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.type = 'D';
      this.gems.value = 2500;
    } else if (random > 30 && random <= 38) {
      for (let i = 1; i <= 1; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.type = 'D';
      this.artObject.value = 7500;
    } else if (random > 38 && random <= 46) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.type = 'D';
      this.gems.value = 5000;
      // RECOMMENCER LA TABLE A PARTIR D'ICI
    } else if (random > 29 && random <= 35) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'C';
    } else if (random > 35 && random <= 40) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'C';
    } else if (random > 40 && random <= 45) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'C';
    } else if (random > 45 && random <= 50) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'C';
    } else if (random > 50 && random <= 54) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'D';
    } else if (random > 54 && random <= 58) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'D';
    } else if (random > 58 && random <= 62) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'D';
    } else if (random > 62 && random <= 66) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'D';
    } else if (random > 66 && random <= 68) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += 1;
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'E';
    } else if (random > 68 && random <= 70) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      this.artObject.value = 750;
      this.magicItemOne.type = 'E';
    } else if (random > 70 && random <= 72) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 500;
      this.magicItemOne.type = 'E';
    } else if (random > 72 && random <= 74) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'E';
    } else if (random > 74 && random <= 76) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 76 && random <= 78) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 78 && random <= 80) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 500;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 80 && random <= 82) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      for (let k = 1; k <= 1; k++) {
        this.magicItemTwo.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 1000;
      this.magicItemOne.type = 'F';
      this.magicItemTwo.type = 'G';
    } else if (random > 82 && random <= 85) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 250;
      this.magicItemOne.type = 'H';
    } else if (random > 85 && random <= 88) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.artObject.value = 750;
      this.magicItemOne.type = 'H';
    } else if (random > 88 && random <= 90) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 500;
      this.magicItemOne.type = 'H';
    } else if (random > 90 && random <= 92) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      for (let j = 1; j <= 1; j++) {
        this.magicItemOne.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.gems.value = 1000;
      this.magicItemOne.type = 'H';
    } else if (random > 92 && random <= 94) {
      for (let i = 1; i <= 2; i++) {
        this.artObject.nb += Math.floor((Math.random() * 4) + 1);
      }
      this.magicItemOne.nb += 1;
      this.artObject.value = 250;
      this.magicItemOne.type = 'I';
    } else if (random > 94 && random <= 96) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 500;
      this.magicItemOne.type = 'I';
    } else if (random > 96 && random <= 98) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'I';
    } else if (random > 98 && random <= 100) {
      for (let i = 1; i <= 3; i++) {
        this.gems.nb += Math.floor((Math.random() * 6) + 1);
      }
      this.magicItemOne.nb += 1;
      this.gems.value = 1000;
      this.magicItemOne.type = 'I';
    }
    this.checkGemsOrArt();
    return;
  }
  onProductClicked(id: string) {
  }

}
