import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';

export const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent,children:[
    {path:'home-content',component:HomeContentComponent},
    {path:'playlist',component:PlaylistComponent},
    {path:'search',component:SearchComponent},
  ]},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},

];
