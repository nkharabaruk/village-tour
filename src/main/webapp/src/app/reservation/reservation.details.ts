import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Reservation} from "../../shared/model/reservation.model";
import {ReservationService} from "../../shared/service/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.details.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationDetails implements OnInit {
  title = "Бронювання";
  reservation: Observable<Reservation>;
  reservationId: number;
  img_src: string = `${environment.files}/img`;

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
