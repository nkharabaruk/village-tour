import { Component, OnInit } from '@angular/core';
import {Place} from "../../shared/model/place.model";
import {PlaceService} from "../../shared/service/place.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Place[];
  dropdownTittle: string;
  dayCount: number[];
  personCount: number[];
  day: string;
  person: string;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.dropdownTittle = "Місцевість";
    this.dayCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.personCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.day = "Кількість днів";
    this.person = "Кількість осіб";
    this.placeService.getPlaces().subscribe((places) => {
      this.places = places;
      console.log(places);
    });
  }

  setButtonName(place){
    this.dropdownTittle = place.name;
  }
}
