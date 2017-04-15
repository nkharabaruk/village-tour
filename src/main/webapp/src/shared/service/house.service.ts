import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {House} from "../model/house.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HouseService {
  baseUrl: string = `${environment.baseUrl}/rest/houses`;

  constructor(private http: Http) {}

  getHouses(): Observable<House[]> {
    return this.http.get(this.baseUrl).map(response => {
      return response.json()._embedded.houses as House[];
    });
  }
}
