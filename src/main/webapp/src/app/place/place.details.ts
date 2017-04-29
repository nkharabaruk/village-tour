import {Component, OnInit, ViewChild} from '@angular/core';
import {Place} from "../../shared/model/place.model";
import {PlaceService} from "../../shared/service/place.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {Popup} from "ng2-opd-popup";

@Component({
  selector: 'app-place-details',
  templateUrl: './place.details.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceDetails implements OnInit {
  title = "Місцевість";
  place: Place = <Place>{};
  placeId: number;
  img_src: string = `${environment.files}/img`;
  private sub: any;

  constructor(private placeService: PlaceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.placeId = +params['p_id'];
    });

    this.placeService.getPlace(this.placeId)
      .subscribe(place => this.place = place);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
