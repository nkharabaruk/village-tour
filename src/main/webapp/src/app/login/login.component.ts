import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../shared/service/reservation.service";
import {Reservation} from "../../shared/model/reservation.model";
import {SearchParamsService} from "../../shared/service/search-params.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  surname: string;
  phone: string;
  description: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reservationService: ReservationService,
              private searchParamService: SearchParamsService) { }

  ngOnInit() {
    console.log(this.searchParamService.startDate);
  }

  submitForm() {
    this.searchParamService.name = this.name;
    this.searchParamService.surname = this.surname;
    this.searchParamService.phone = this.phone;
    this.searchParamService.description = this.description;
    this.createReservation();
    this.router.navigate(['reservations'], { relativeTo: this.route })
  }

  createReservation() {
    let reservation = new Reservation();
    reservation.personCount = this.searchParamService.personCount;
    reservation.dayCount = this.searchParamService.dayCount;
    reservation.checkInDate = this.searchParamService.startDate;
    reservation.checkOutDate = this.searchParamService.startDate + this.searchParamService.dayCount * 1000 * 60 * 60 * 24;
    reservation.operationDate = Date.now().toString();
    // reservation.description = this.searchParamService.description;
    this.reservationService.createReservation(reservation).subscribe();
  }
}
