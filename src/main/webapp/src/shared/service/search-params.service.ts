import {Injectable} from "@angular/core";
import {Place} from "../model/place.model";
import {Village} from "../model/village.model";

@Injectable()
export class SearchParamsService {
  place: Place;
  village: Village;

  reset() {
    this.place = null;
    this.village = null;
  }
}
