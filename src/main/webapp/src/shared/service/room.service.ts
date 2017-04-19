import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Room} from "../model/room.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {
  baseUrl: string = `${environment.rest}/rooms`;

  constructor(private http: Http) {}

  getRooms(): Observable<Room[]> {
    return this.http.get(this.baseUrl).map(response => response.json()._embedded.rooms as Room[]);
  }

  getRoom(id:number): Observable<Room> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(response => response.json() as Room);
  }
}
