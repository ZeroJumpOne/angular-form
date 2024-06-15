import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { FrmBasicComponent } from './pages/frm-basic/frm-basic.component';
import { FrmDynamicComponent } from './pages/frm-dynamic/frm-dynamic.component';
import { FrmSwitchesComponent } from './pages/frm-switches/frm-switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrmBasicComponent,
    FrmDynamicComponent,
    FrmSwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
