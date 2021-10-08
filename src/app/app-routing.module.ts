import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FpComponent } from './components/fp/fp.component';
import { SpComponent } from './components/sp/sp.component';
const routes: Routes = [
  { path: "", component: FpComponent },
  { path: "sp", component: SpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
