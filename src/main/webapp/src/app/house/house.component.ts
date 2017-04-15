import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {House} from "../../shared/model/house.model";
import {HouseService} from "../../shared/service/house.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "Будинки";
  houses: Observable<House[]>;

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houses = this.houseService.getHouses();
  }

}
