import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { GuardGuard } from './core/shared/guard.guard';

const routes: Routes = [

{path :'',component:LoginComponent},

  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),

   
  },
  {
    path: 'societe',
    loadChildren: () => import('./core/societe/societe.module').then(m => m.SocieteModule),
    
  },
  {
    path: 'client',
    loadChildren: () => import('./core/client/client.module').then(m => m.ClientModule),
    // canActivate :[GuardGuard]
  },
  
  {
    path: 'employeur',
    loadChildren: () => import('./core/employeur/employeur.module').then(m => m.EmployeurModule),
    // canActivate :[GuardGuard]
  },
  {
    path: 'livreur',
    loadChildren: () => import('./core/livreur/livreur.module').then(m => m.LivreurModule)
  },

  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
