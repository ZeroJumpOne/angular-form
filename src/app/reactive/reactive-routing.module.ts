import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmBasicComponent } from './pages/frm-basic/frm-basic.component';
import { FrmDynamicComponent } from './pages/frm-dynamic/frm-dynamic.component';
import { FrmSwitchesComponent } from './pages/frm-switches/frm-switches.component';

const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'basic',    component: FrmBasicComponent },
         { path: 'dynamic',  component: FrmDynamicComponent },
         { path: 'switches', component: FrmSwitchesComponent },
         { path: '**',       redirectTo: 'basic'},
      ]

   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ReactiveRoutingModule { }
