import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routes} from "./app.router";
import {AppComponent} from "./app.component";
import {RoomService} from "../shared/service/room.service";
import {BsDropdownModule, ButtonsModule} from "ngx-bootstrap";
import {DatePickerModule} from "ng2-datepicker";
import {RoomComponent} from "./room/room.component";
import {HomeComponent} from "./home/home.component";
import {PlaceComponent} from "./place/place.component";
import {PlaceService} from "../shared/service/place.service";
import {DropdownModule} from "ng2-dropdown";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationService} from "../shared/service/reservation.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    PlaceComponent,
    ReservationComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatePickerModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    RoomService,
    PlaceService,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
