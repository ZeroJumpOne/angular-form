import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const RTX5090 = {
   name: 'RTX5090',
   price: 2500,
   inStorage: 10,
}


@Component({
   selector: 'app-frm-basic',
   templateUrl: './frm-basic.component.html',
   styleUrl: './frm-basic.component.css'
})
export class FrmBasicComponent implements OnInit {

   public frmBasic: FormGroup = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(3)]],
      price:     [0,  [Validators.required, Validators.min(0)]],
      inStorage: [0,  [Validators.required, Validators.min(0)]],
   });

   constructor(private fb: FormBuilder) { }

   ngOnInit(): void {

      // this.frmBasic.reset(RTX5090);

   }

   isValidField( field: string ) {
      return this.frmBasic.controls[field].getError('required') &&
             this.frmBasic.controls[field].touched;
   }

   getFieldError( field: string): string | null {

      if (!this.frmBasic.controls[field]) return null;

      const errors = this.frmBasic.controls[field].errors || {};

      for(const key of Object.keys(errors)) {
         switch( key ) {
            case 'required':
               return 'Este campo es requerido';
            case 'minlength':
               return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
         }
      }

      return null;
   }

   public onSave(): void {
      if(this.frmBasic.invalid) {
         this.frmBasic.markAllAsTouched();
         return;
      }

      console.log(this.frmBasic.value);

      this.frmBasic.reset({ price: 0, inStorage: 0 });

   }


}
