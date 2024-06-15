import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-frm-dynamic',
   templateUrl: './frm-dynamic.component.html',
   styleUrl: './frm-dynamic.component.css'
})
export class FrmDynamicComponent {

   public frmDynamic: FormGroup = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
         ['Metal Gear', Validators.required],
         ['Death Stranding', Validators.required],
      ])
   });

   public newFavorite: FormControl = new FormControl('', [Validators.required]);

   constructor(private fb: FormBuilder) { }

   get favoriteGames(): FormArray {
      return this.frmDynamic.get('favoriteGames') as FormArray;
   }

   onDeletefavorite(idx: number): void {

      this.favoriteGames.removeAt(idx);

   }

   onAddToFavorite(): void {
      if(this.newFavorite.invalid) return; /* No continua con el codigo */

      const newGame = this.newFavorite.value;

      // console.log(this.newFavorite.value);
      // this.favoriteGames.push( new FormControl( newGame, [Validators.required]));
      this.favoriteGames.push(
         this.fb.control( newGame, [Validators.required])
       );

       this.newFavorite.reset();
   }

   onSubmit(): void {

      if (this.frmDynamic.invalid) {
         this.frmDynamic.markAllAsTouched();
         return; /* No continuar con el siguiente codigo */
      }

      console.log(this.frmDynamic.value);

      (this.frmDynamic.controls['favoriteGames'] as FormArray) = this.fb.array([]);
      this.frmDynamic.controls['name'].reset();

   }

   isValidField(field: string) {
      return this.frmDynamic.controls[field].getError('required') &&
         this.frmDynamic.controls[field].touched;
   }

   isValidFieldInArray( formArray: FormArray,  index: number) {

      return formArray.controls[index].errors &&
             formArray.controls[index].touched;

   }

   getFieldError(field: string): string | null {

      if (!this.frmDynamic.controls[field]) return null;

      const errors = this.frmDynamic.controls[field].errors || {};

      for (const key of Object.keys(errors)) {
         switch (key) {
            case 'required':
               return 'Este campo es requerido';
            case 'minlength':
               return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
         }
      }

      return null;
   }



}
