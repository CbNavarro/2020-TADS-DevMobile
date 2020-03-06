import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ifprComponent } from './ifpr/ifpr.component';
import { tadsComponent } from './tads/tads.component';


const routes: Routes = [
  {path:"ifpr", component: ifprComponent},
  {path:"tads", component: tadsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
