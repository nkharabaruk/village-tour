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

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.dropdownTittle = "Місцевість";
    this.placeService.getPlaces().subscribe((places) => {
      this.places = places;
      console.log(places);
    });
  }

  setButtonName(button, text){
    console.log(button);
    button.textContent = text;
  }
}
