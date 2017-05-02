import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Village} from "../model/village.model";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class VillageService {
  baseUrl: string = `${environment.rest}/villages`;

  constructor(private http: Http) {}

  getVillages(): Observable<Village[]> {
    return this.http.get(this.baseUrl).map(response => response.json()._embedded.villages as Village[]);
  }
}
