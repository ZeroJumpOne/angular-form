import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-switches',
  templateUrl: './frm-switches.component.html',
  styleUrl: './frm-switches.component.css'
})
export class FrmSwitchesComponent {

   public frmSwitches: FormGroup = this.fb.group({
      gender: ['M', Validators.required],
      wantNotificacions: [ true, Validators.required ],
      termsAndConditions: [ false, Validators.requiredTrue ]
   });

   public person = {
      gender: 'F',
      wantNofications: false
   }

   constructor(
      private fb: FormBuilder,
   ) {}

   isValidField(field: string) {
      return this.frmSwitches.controls[field].getError('required') &&
         this.frmSwitches.controls[field].touched;
   }

   public onSave(): void {

      if (this.frmSwitches.invalid) {
         this.frmSwitches.markAllAsTouched();
         return; /* No continua con el siguiente codigo de aceptacion */
      }

      const { termsAndConditions, ...newPerson } = this.frmSwitches.value;

      this.person = newPerson;
      console.log(this.frmSwitches.value);
      console.log(this.person);
   }

}
