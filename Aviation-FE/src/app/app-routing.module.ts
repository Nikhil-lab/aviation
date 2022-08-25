import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AviationComponent } from './aviation/aviation.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'aviation'},
  {path:'aviation',component:AviationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
