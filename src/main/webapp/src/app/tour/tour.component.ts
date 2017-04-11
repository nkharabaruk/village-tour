import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TourService} from "../../shared/service/tour.service";
import {Tour} from "../../shared/model/tour.model";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  title = "Тури";
  tours: Observable<Tour[]>;

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tours = this.tourService.getTours();
  }

}
