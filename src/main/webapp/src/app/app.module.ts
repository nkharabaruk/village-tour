import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routes} from "./app.router";
import {AppComponent} from "./app.component";
import {RoomService} from "../shared/service/room.service";
import {BsDropdownModule, ButtonsModule} from "ngx-bootstrap";
import {RoomComponent} from "./room/room.component";
import {HomeComponent} from "./home/home.component";
import {TourComponent} from "./tour/tour.component";
import {TourService} from "../shared/service/tour.service";
import {PlaceComponent} from "./place/place.component";
import {PlaceService} from "../shared/service/place.service";
import {DropdownModule} from "ng2-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    TourComponent,
    PlaceComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    DropdownModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TourService, RoomService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
