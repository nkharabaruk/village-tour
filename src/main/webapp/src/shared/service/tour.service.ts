import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Tour} from "../model/tour.model";

@Injectable()
export class TourService {
  baseUrl: string = `${environment.baseUrl}/tours`;

  constructor(private http: Http) {}

  getTours(): Observable<Tour[]> {
    return this.http.get(this.baseUrl).map(response => {
      return response.json()._embedded.tours as Tour[];
    });
  }
}
