import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcoountComponent } from './acoount.component';

const routes: Routes = [{ path: '', component: AcoountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcoountRoutingModule { }
