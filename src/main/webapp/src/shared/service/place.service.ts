import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Place} from "../model/place.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PlaceService {
  baseUrl: string = `${environment.rest}/places`;

  constructor(private http: Http) {}

  getPlaces(): Observable<Place[]> {
    return this.http.get(this.baseUrl).map(response => response.json()._embedded.places as Place[]);
  }

  getPlace(id:number): Observable<Place> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(response => response.json() as Place);
  }
}
