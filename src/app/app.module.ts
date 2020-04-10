import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { InterceptorModule } from './interceptor/interceptor.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HomeComponent } from './admin/home/home.component';
import { AddDoctorComponent } from './admin/add-doctor/add-doctor.component';
import { AllDoctorComponent } from './admin/all-doctor/all-doctor.component';
import { AddPatientComponent } from './admin/add-patient/add-patient.component';
import { AllPatientComponent } from './admin/all-patient/all-patient.component';
import { DoctorDashboardComponent } from './doctor/doctor_dashboard/doctor_dahboard.component';
import { PredictComponent } from './doctor/predict/predict.component';
import { EditProfileComponent } from './doctor/edit-profile/edit-profile.component';
import { NavbarComponent } from './doctor/navbar/navbar.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { ResultComponent } from './doctor/result/result.component';

const appRoutes: Routes = [
  { path : '', component: LoginComponent },
  { path : 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'all-doctor', component: AllDoctorComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'all-patient', component: AllPatientComponent},
  { path: 'doctor_dashboard', component: DoctorDashboardComponent },
  { path: 'predict/:id', component: PredictComponent },
  { path: 'patients', component: PatientsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AddDoctorComponent,
    AllDoctorComponent,
    AddPatientComponent,
    AllPatientComponent,
    DoctorDashboardComponent,
    PredictComponent,
    EditProfileComponent,
    NavbarComponent,
    PatientsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // InterceptorModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    EditProfileComponent,
    ResultComponent
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
