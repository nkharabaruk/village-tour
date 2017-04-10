import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Room} from "../model/room.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {
  baseUrl: string = `${environment.baseUrl}/rest/rooms`;

  constructor(private http: Http) {}

  getRooms(): Observable<Room[]> {
    return this.http.get(this.baseUrl).map(response => {
      return response.json()._embedded.rooms as Room[];
    });
  }
}
