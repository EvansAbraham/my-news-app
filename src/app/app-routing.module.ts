import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent},
  {path:'sports',component:SportsnewsComponent},
  {path:'science',component:SciencenewsComponent},
  {path:'health',component:HealthnewsComponent},
  {path:'entertainment',component:EntertainmentnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
