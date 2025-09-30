import {ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordsIgualesValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get('password')?.value ?? '';
      const confirm = formGroup.get('confirm')?.value ?? '';
      if (!pass || !confirm) return null;           
      return pass === confirm ? null : { passwordMismatch: true };
    };
  }