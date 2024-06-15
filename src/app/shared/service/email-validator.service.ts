import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

   validate(control: AbstractControl ): Observable<ValidationErrors | null> {

      const email = control.value;

      const httpCallObservable = new Observable<ValidationErrors | null>( subscriber => {

         console.log({email});

         if( email === 'fernando@google.com') {
            subscriber.next({ emailTaken: true});
            subscriber.complete();
            return;
         }

         subscriber.next(null);
         subscriber.complete();
      })
      .pipe(
         delay(2000) /* únicamente para ver prueba de resultado */
      )

      return httpCallObservable;

   }

   // validate(control: AbstractControl ): Observable<ValidationErrors | null> {

   //    const email = control.value;

   //    console.log({ email });

   //    return of({
   //       emailTaken: true
   //    })
   //    .pipe(
   //       delay(2000)
   //    )

   // }

}

/* referencia de algo real a una llamada del backend */
// return this.http.get<any[]>('http://backend:3000/users?q=${email}')
// .pipe(
//    map( resp => {
//       return (resp.length === 0) ? null : { emailTaken: true}
//    })
// )
