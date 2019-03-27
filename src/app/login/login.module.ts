import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFieldsComponent } from './components/login-fields/login-fields.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LoginFieldsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule
    
  ], exports: [
    MatButtonModule,
    FormsModule, 
  ]
})
export class LoginModule { }
