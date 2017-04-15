import {Component, OnInit} from '@angular/core';
import {RoomService} from "../shared/service/room.service";
import {Observable} from "rxjs";
import {Room} from "../shared/model/room.model";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Кімнати';
  rooms: Observable<Room[]>;
  img_src: string = `${environment.files}/img`;

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}
