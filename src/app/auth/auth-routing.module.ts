import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmRegisterComponent } from './pages/frm-register/frm-register.component';

const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'signup', component: FrmRegisterComponent },
         { path: '**',     redirectTo: 'signup' },
      ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
