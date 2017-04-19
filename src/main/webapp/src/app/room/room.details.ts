import {Component, OnInit} from '@angular/core';
import {Room} from "../../shared/model/room.model";
import {RoomService} from "../../shared/service/room.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-room-details',
  templateUrl: './room.details.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomDetails implements OnInit {
  title = "Кімната";
  room: Room = <Room>{};
  roomId: number;
  img_src: string = `${environment.files}/img`;
  private sub: any;

  constructor(private roomService: RoomService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.roomId = +params['id'];
    });

    this.roomService.getRoom(this.roomId)
      .subscribe(room => this.room = room);
    console.log(this.roomId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
