import {Component, OnInit} from "@angular/core";
import {Place} from "../../shared/model/place.model";
import {PlaceService} from "../../shared/service/place.service";
import {Router} from "@angular/router";
import {SearchParamsService} from "../../shared/service/search-params.service";
import {VillageService} from "../../shared/service/village.service";
import {Village} from "../../shared/model/village.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Place[];
  village: string;
  dayCount: number[];
  personCount: number[];
  day: string;
  person: string;
  villages: Village[];
  selectedVillage: Village;
  selectedStartDate: string;
  selectedDayCount: number;
  selectedPersonCount: number;

  constructor(private router: Router,
              private searchParamsService: SearchParamsService,
              private villageService: VillageService,
              private placeService: PlaceService) {
  }

  ngOnInit() {
    this.village = "Оберіть село";
    this.dayCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.personCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.day = "Кількість днів";
    this.person = "Кількість осіб";
    this.selectedStartDate = Date.now().toString();
    this.villageService.getVillages().subscribe(villages => {
      this.villages = villages;
    });
    this.placeService.getPlaces().subscribe((places) => {
      this.places = places;
    });
  }

  setButtonName(village) {
    this.village = village.name;
    this.selectedVillage = village;
  }

  search() {
      this.searchParamsService.village = this.selectedVillage;
      this.searchParamsService.startDate = this.selectedStartDate;
      this.searchParamsService.dayCount = this.selectedDayCount;
      this.searchParamsService.personCount = this.selectedPersonCount;
      this.router.navigate(['houses']);
  }
}
