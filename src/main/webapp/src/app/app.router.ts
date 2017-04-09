import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RoomComponent} from "./room/room.component";
import {HomeComponent} from "./home/home.component";
import {TourComponent} from "./tour/tour.component";

export const router: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'tours', component: TourComponent},
  {path: 'rooms', component: RoomComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

