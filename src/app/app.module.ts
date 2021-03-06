import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, 
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, 
  MatDividerModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AirplaneService } from './airplane.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: 'create' , component: CreateComponent },
  { path: 'edit/:id' , component: EditComponent },
  { path: 'list' , component: ListComponent },
  { path: '' , redirectTo:'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
