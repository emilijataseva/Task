import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function phoneNumberValidator(numRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const phoneNum = numRe.test(control.value);
    return phoneNum ? null : {'phoneNumber': {value: control.value}};
  };
}

@Directive({
  selector: '[appPhoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true}]
})
export class PhoneNumberValidatorDirective implements Validator {
  @Input('appPhoneNumber') phoneNumber: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.phoneNumber ? phoneNumberValidator(new RegExp(this.phoneNumber, 'i'))(control)
      : null;
  }
}

