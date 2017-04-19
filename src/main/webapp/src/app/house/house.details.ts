import {Component, OnInit} from '@angular/core';
import {House} from "../../shared/model/house.model";
import {HouseService} from "../../shared/service/house.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-house-details',
  templateUrl: './house.details.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseDetails implements OnInit {
  title = "Бронювання будинку";
  house: House = <House>{};
  houseId: number;
  img_src: string = `${environment.files}/img`;
  private sub: any;

  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.houseId = +params['id'];
    });

    this.houseService.getHouse(this.houseId)
      .subscribe(house => this.house = house);
    console.log(this.houseId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
