import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Reservation} from "../../shared/model/reservation.model";
import {ReservationService} from "../../shared/service/reservation.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  title = "Ваші резервації";
  reservations: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }

  getDayCount(endDate:string, startDate:string) {
    let end = new Date(endDate).getTime();
    let start = new Date(startDate).getTime();
    return (end - start)/3600/1000/24;
  }

}
