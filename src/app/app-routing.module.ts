import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosComponent } from './components/bolos/bolos.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'sobre',component:SobreComponent},
  {path:'bolos',component:BolosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
