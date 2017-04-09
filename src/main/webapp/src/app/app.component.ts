import {Component, OnInit} from '@angular/core';
import {RoomService} from "../shared/service/room.service";
import {Observable} from "rxjs";
import {Room} from "../shared/model/room.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rooms';
  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}
