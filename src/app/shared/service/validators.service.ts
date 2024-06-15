import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

   public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
   public emailPattern: string = "^[a-z0-9._%+1]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

   public canBeStrider = (control: FormControl): ValidationErrors | null => {

      const value: string = control.value.trim().toLowerCase();

      if (value === 'strider') {
         return {
            noStrider: true,
         }
      }

      return null;
   }

   public isValidField( form: FormGroup, field: string ) {
      // console.log(`Servicio de validacion ${ field }`, form.controls[field].errors);

      return form.controls[field].errors && form.controls[field].touched;
   }

   public twins( field1:string, field2: string ) {

      return ( formGroup: AbstractControl ): ValidationErrors | null => {

         const fieldValue1 = formGroup.get(field1)?.value;
         const fieldValue2 = formGroup.get(field2)?.value;

         if ( fieldValue1 !== fieldValue2 ) {
            formGroup.get(field2)?.setErrors({ notEqual: true });
            return { notEqual: true }
         }

         formGroup.get(field2)?.setErrors(null);
         return null;
      }

   }


}
