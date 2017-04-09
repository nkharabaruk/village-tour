import {Component, OnInit} from "@angular/core";
import {RoomService} from "../../shared/service/room.service";
import {Observable} from "rxjs";
import {Room} from "../../shared/model/room.model";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html"
})
export class RoomComponent implements OnInit {
  title = "Rooms";
  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}
