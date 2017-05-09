import {Injectable} from "@angular/core";
import {Place} from "../model/place.model";
import {Village} from "../model/village.model";

@Injectable()
export class SearchParamsService {
  place: Place;
  village: Village;
  startDate: string;
  dayCount: number;
  personCount: number;
  name: string;
  surname: string;
  phone: string;
  description: string;

  reset() {
    this.place = null;
    this.village = null;
    this.startDate = null;
    this.dayCount = 0;
    this.personCount = 0;
    this.description = null;
  }
}
