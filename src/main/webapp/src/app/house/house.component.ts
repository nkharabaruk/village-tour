import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {House} from "../../shared/model/house.model";
import {HouseService} from "../../shared/service/house.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "Будинки";
  types: string[] = ["HOTEL", "PRIVATE_SECTOR", "HOSTEL", "SANATORIUM", "CAMPING"];
  houses: Observable<House[]>;

  searchForm: FormGroup;
  type: FormControl;
  name: FormControl;
  address: FormControl;

  constructor(private fb: FormBuilder, private houseService: HouseService) { }

  ngOnInit() {
    this.initSearchForm();
    this.houses = this.houseService.getHouses();
  }

  search(): void {
    this.houses = this.houseService.findByTypeOrNameOrAddress(
      this.type.value,
      this.name.value,
      this.address.value
    );
  }

  private initSearchForm(): void {
    this.type = new FormControl("");
    this.name = new FormControl();
    this.address = new FormControl();
    this.searchForm = this.fb.group({
      type: this.type,
      name: this.name,
      address: this.address
    });
  }

}
