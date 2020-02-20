import { Injectable } from '@angular/core';
import {Subject, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ArtObjectModel} from '../tab1/artObject.model';


@Injectable({
  providedIn: 'root'
})
export class ArtObjectsService {

  constructor(private http: HttpClient) {
  }
  private artObj: ArtObjectModel[] = [];

  public stuff$ = new Subject<ArtObjectModel[]>();

  getArt(artValue) {
    this.http.get('http://localhost:3000/api/art/:' + artValue.toString() + '').subscribe(
        (art: ArtObjectModel[]) => {
          if (art) {
            this.artObj = art;
            this.emitArt();
          }
        },
        (error) => {
            console.log(error);
        }
    );
  }

  emitArt() {
    this.stuff$.next(this.artObj);
  }
}
