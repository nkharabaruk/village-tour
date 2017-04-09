import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routes} from "./app.router";
import {AppComponent} from "./app.component";
import {RoomService} from "../shared/service/room.service";
import {ButtonsModule, BsDropdownModule, } from 'ngx-bootstrap';
import {RoomComponent} from "./room/room.component";
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import {TourService} from "../shared/service/tour.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    TourComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TourService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
