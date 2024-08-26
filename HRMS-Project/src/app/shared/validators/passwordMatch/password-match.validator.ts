import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({
        ...(confirmPassword.errors || {}),
        passwordMismatch: true,
      });
      console.log(password, confirmPassword);

      return { passwordMismatch: true };
    }
    console.log(password?.value, confirmPassword?.value);

    return null;
  };
