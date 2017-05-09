import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RoomComponent} from "./room/room.component";
import {HomeComponent} from "./home/home.component";
import {PlaceComponent} from "./place/place.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {HouseComponent} from "./house/house.component";
import {ReservationDetails} from "./reservation/reservation.details";
import {HouseDetails} from "app/house/house.details";
import {RoomDetails} from "./room/room.details";
import {PlaceDetails} from "./place/place.details";
import {ContactComponent} from "./contact/contact.component";

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/houses', redirectTo: 'houses', pathMatch: 'full'},
  {path: 'reservations', component: ReservationComponent},
  {path: 'reservations/:res_id', component: ReservationDetails},
  {path: 'reservations/home', redirectTo: 'home', pathMatch: 'full'},
  {path: 'reservations/houses', redirectTo: 'houses', pathMatch: 'full'},
  {path: 'houses', component: HouseComponent},
  {path: 'houses/:h_id', component: HouseDetails},
  {path: 'houses/:h_id/rooms/:r_id', component: RoomDetails},
  {path: 'houses/:h_id/:r_id', redirectTo: 'houses/:h_id/rooms/:r_id', pathMatch: 'full'},
  {path: 'houses/:h_id/rooms/:r_id/reservations', redirectTo: 'reservations', pathMatch: 'full'},
  {path: 'rooms', component: RoomComponent},
  {path: 'rooms/:r_id', component: RoomDetails},
  {path: 'rooms/:r_id/reservations', redirectTo: 'reservations', pathMatch: 'full'},
  {path: 'places', component: PlaceComponent},
  {path: 'places/:p_id', component: PlaceDetails},
  {path: 'contact', component: ContactComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

