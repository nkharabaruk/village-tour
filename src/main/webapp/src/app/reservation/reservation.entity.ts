import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Reservation} from "../../shared/model/reservation.model";
import {ReservationService} from "../../shared/service/reservation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationEntity implements OnInit {
  title = "Ваша Резервація";
  reservation: Observable<Reservation>;
  reservationId: number;

  constructor(private reservationService: ReservationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.reservationId = params['id'];
    });

    this.reservation = this.reservationService.getReservation(this.reservationId);
    console.log(this.reservation);
  }

}
