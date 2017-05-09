import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {House} from "../../shared/model/house.model";
import {HouseService} from "../../shared/service/house.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../environments/environment";
import {SearchParamsService} from "../../shared/service/search-params.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "Будинки";
  types: { selected: boolean, value: string }[];
  houses: Observable<House[]>;
  img_src: string = `${environment.files}/houses`;

  searchForm: FormGroup;
  name: FormControl;
  village: FormControl;

  constructor(private fb: FormBuilder,
              private houseService: HouseService,
              private searchParamsService: SearchParamsService) {
  }

  ngOnInit() {
    this.types = [
      {selected: false, value: "HOTEL"},
      {selected: false, value: "PRIVATE_SECTOR"},
      {selected: false, value: "HOSTEL"},
      {selected: false, value: "SANATORIUM"},
      {selected: false, value: "CAMPING"}
    ];
    this.initSearchForm();
    if (!!this.searchParamsService.village) {
      this.village.setValue(this.searchParamsService.village.name);
      this.search();
    } else {
      this.houses = this.houseService.getHouses();
    }
  }

  select(type: { selected: boolean, type: string }) {
    type.selected = !type.selected;
  }

  search(): void {
    let types = this.types.filter(type => type.selected).map(type => type.value);
    this.houses = this.houseService.findByTypeInOrNameOrVillageName(
      types,
      this.name.value,
      this.village.value
    );
  }

  reset() {
    this.searchParamsService.reset();
    this.ngOnInit();
  }

  private initSearchForm(): void {
    this.name = new FormControl();
    this.village = new FormControl();
    this.searchForm = this.fb.group({
      name: this.name,
      village: this.village
    });
  }

}
