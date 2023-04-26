import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExercisesComponent } from './components/esercises/exercises/exercises.component';
import { StructuralDirectivesComponent } from './components/esercises/structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExercisesComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
