import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {House} from "../model/house.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Place} from "../model/place.model";
import {Village} from "../model/village.model";

@Injectable()
export class HouseService {
  baseUrl: string = `${environment.rest}/houses`;

  constructor(private http: Http) {
  }

  getHouses(): Observable<House[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json()
        ._embedded.houses as House[]);
  }

  getHouse(id:number): Observable<House> {
    return this.http.get(`${this.baseUrl}/${id}?projection=houseWithRooms`)
      .map(response => response.json() as House);
  }

  findByTypeInOrNameOrVillageName(types: string[], name: string, villageName: string): Observable<House[]> {
    return this.http.get(`${this.baseUrl}/search/findByTypeInOrNameOrVillageName`,
      {
        search: {
          types: types.length > 0 ? types : "",
          name: !!name ? name : "",
          villageName: !!villageName ? villageName : ""
        }
      })
      .map(response => response.json()._embedded.houses as House[]);
  }
}
