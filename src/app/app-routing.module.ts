import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExercisesComponent } from './components/esercises/exercises/exercises.component';
import { StructuralDirectivesComponent } from './components/esercises/structural-directives/structural-directives.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'exercises', component: ExercisesComponent,
    children: [
      { path: 'structural-directives', component: StructuralDirectivesComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
