import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ReservationService} from "../../shared/service/reservation.service";

@Component({
  selector: 'app-confirm',
  providers: [ReservationService],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router, private reservationService: ReservationService) { }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigate(['home']);
  }

}
