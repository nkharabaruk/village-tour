import {Component, OnInit} from "@angular/core";
import {Reservation} from "../../shared/model/reservation.model";
import {ReservationService} from "../../shared/service/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation.details.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationDetails implements OnInit {
  title = "Бронювання";
  reservation: Reservation = <Reservation>{};
  reservationId: number;
  img_src: string = `${environment.files}/img`;
  private sub: any;

  constructor(private reservationService: ReservationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.reservationId = +params['res_id'];
    });

    this.reservationService.getReservation(this.reservationId)
      .subscribe(reservation => this.reservation = reservation);
  }

}
