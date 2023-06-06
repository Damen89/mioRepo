import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'utenti', component: UtentiComponent, canActivate:[authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
