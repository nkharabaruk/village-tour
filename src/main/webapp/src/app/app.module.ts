import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {HouseComponent} from "./house/house.component";
import {HouseService} from "../shared/service/house.service";
import {ReservationDetails} from "./reservation/reservation.details";
import {HouseDetails} from "./house/house.details";
import {RoomDetails} from "./room/room.details";
import {LoginComponent} from "./login/login.component";
import {PopupModule} from "ng2-opd-popup";
import {PlaceDetails} from "./place/place.details";
import {ContactComponent} from "./contact/contact.component";
import {SearchParamsService} from "../shared/service/search-params.service";
import {VillageService} from "../shared/service/village.service";
import {ConfirmComponent} from "./confirm/confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomDetails,
    HomeComponent,
    PlaceComponent,
    PlaceDetails,
    ReservationComponent,
    ReservationDetails,
    HouseComponent,
    HouseDetails,
    LoginComponent,
    ContactComponent,
    ConfirmComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopupModule.forRoot(),
    DatePickerModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [
    HouseService,
    RoomService,
    PlaceService,
    ReservationService,
    VillageService,
    SearchParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
