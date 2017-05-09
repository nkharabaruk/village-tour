import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Reservation} from "../model/reservation.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ReservationService {
  baseUrl: string = `${environment.rest}/reservations`;

  constructor(private http: Http) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json()._embedded.reservations as Reservation[]);
  }

  getReservation(id:number): Observable<Reservation> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(response => response.json() as Reservation);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post(this.baseUrl, reservation)
      .map(response => response.json() as Reservation);
  }
}
