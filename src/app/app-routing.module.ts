import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { RecComponent } from './rec/rec.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
 { path: 'main', component: TravelComponent},
 {path:'main/:id',component:RecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
