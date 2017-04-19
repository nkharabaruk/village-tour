import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RoomComponent} from "./room/room.component";
import {HomeComponent} from "./home/home.component";
import {PlaceComponent} from "./place/place.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {HouseComponent} from "./house/house.component";
import {ReservationDetails} from "./reservation/reservation.details";
import {HouseDetails} from "app/house/house.details";

export const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'reservations/:id', component: ReservationDetails},
  {path: 'houses', component: HouseComponent},
  {path: 'houses/:id', component: HouseDetails},
  {path: 'rooms', component: RoomComponent},
  {path: 'places', component: PlaceComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

