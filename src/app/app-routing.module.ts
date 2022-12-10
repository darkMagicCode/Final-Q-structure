import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Core/components/navbar/navbar.component';
import { AuthgurdGuard } from './Core/gurad/authgurd.guard';
import { HomePageComponent } from './Core/components/home-page/home-page.component';
import { LoginComponent } from './Core/components/login/login.component';

const children: Routes = [
  { path: 'accSetting', loadChildren: () => import('./Core/models/acoount/acoount.module').then(m => m.AcoountModule) },
  { path: 'home', canActivate:[AuthgurdGuard], component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  {path:'' , canActivate:[AuthgurdGuard], component:HomePageComponent},
  {path:'**' , component:HomePageComponent},
];

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
