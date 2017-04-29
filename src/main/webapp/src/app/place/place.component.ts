import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {PlaceService} from "../../shared/service/place.service";
import {Place} from "../../shared/model/place.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  title = "Місцевості";
  places: Observable<Place[]>;
  img_src: string = `${environment.files}/img`;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }
}
