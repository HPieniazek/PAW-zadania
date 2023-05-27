import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarmUpComponent } from './warm-up/warm-up.component';

const routes: Routes = [
  {path:'WarmUp', component: WarmUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
