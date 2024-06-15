import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/service/email-validator.service';

@Component({
   selector: 'app-frm-register',
   templateUrl: './frm-register.component.html',
   styleUrl: './frm-register.component.css'
})
export class FrmRegisterComponent {

   public frmRegister: FormGroup = this.fb.group({
      name: ['', Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastNamePattern )],
      // email: ['', [Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ new EmailValidatorService]],
      email: ['', [Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ this.emailValidator ]],
      username: ['', [Validators.required, this.validatorsService.canBeStrider ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', [Validators.required]],
   }, {
      validators: [
         this.validatorsService.twins('password', 'confirmar'),
      ]
   });

   constructor(
      private fb: FormBuilder,
      private validatorsService: ValidatorsService,
      private emailValidator: EmailValidatorService,
   ) { }

   public isValidField( field: string ) {
      return this.validatorsService.isValidField(this.frmRegister, field );
   }

   public onSave(): void {

      if (this.frmRegister.invalid) {
         this.frmRegister.markAllAsTouched();
         console.log('Error frmRegister');

         return;
      }
   }

}
