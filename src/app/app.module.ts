import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ReserveplaygroundComponent } from './components/reserveplayground/reserveplayground.component';
import { BookPlaygroundComponent } from './components/book-playground/book-playground.component';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { ViewPlaygroundsAdminComponent } from './components/view-playgrounds-admin/view-playgrounds-admin.component';
import { AddPlaygroundAdminComponent } from './components/add-playground-admin/add-playground-admin.component';
import { ApproveBookingsComponent } from './components/approve-bookings/approve-bookings.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';

import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";
import { AuthAdminGuard } from "./auth-admin.guard";
import { AdminEditPlaygroundComponent } from './components/admin-edit-playground/admin-edit-playground.component';
import { AdminViewAllBookingsComponent } from './components/admin-view-all-bookings/admin-view-all-bookings.component';



const appRoutes:Routes = [
  
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'homeAdmin', component:AdminHomeComponent, canActivate: [AuthAdminGuard] },
  { path:'signUp', component:RegisterComponent },
  { path:'reservePlayground', component:ReserveplaygroundComponent },
  { path:'myBookings', component:ViewBookingsComponent, canActivate:[AuthGuard] },
  { path:'profile', component:ProfileComponent, canActivate: [AuthGuard] },
  { path:'addPlayground', component:AddPlaygroundAdminComponent, canActivate: [AuthAdminGuard] },
  { path:'approveBookings', component:ApproveBookingsComponent, canActivate: [AuthAdminGuard] },
  { path:'editPlayground', component:AdminEditPlaygroundComponent, canActivate: [AuthAdminGuard] },
  { path:'viewBookingsAdmin', component:AdminViewAllBookingsComponent, canActivate: [AuthAdminGuard] },
  

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PlaygroundComponent,
    ReserveplaygroundComponent,
    BookPlaygroundComponent,
    ViewBookingsComponent,
    ProfileComponent,
    AdminHomeComponent,
    AdminNavigationComponent,
    ViewPlaygroundsAdminComponent,
    AddPlaygroundAdminComponent,
    ApproveBookingsComponent,
    FooterAdminComponent,
    AdminEditPlaygroundComponent,
    AdminViewAllBookingsComponent
  
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    
  ],
  providers: [AuthGuard, AuthService, AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
