import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {House} from "../model/house.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

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
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(response => response.json() as House);
  }

  // getHouse(id: number): Observable<House> {
  //   return this.getHouses()
  //     .map(houses => houses.find(house => house.id == id));
  // }

  findByTypeOrNameOrAddress(type: string, name: string, address: string): Observable<House[]> {
    return this.http.get(`${this.baseUrl}/search/findByTypeOrNameOrAddress`,
      {
        search: {
          type: type,
          name: name,
          address: address
        }
      })
      .map(response => response.json()._embedded.houses as House[]);
  }
}
