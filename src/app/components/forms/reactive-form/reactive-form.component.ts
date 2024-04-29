import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


function validateTown(control: AbstractControl) {
  const townList = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas de Gran Canaria', 'Bilbao'];
  if (townList.includes(control.value)) {
    return null;
  }
  return { town: true };
}
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  profileForm = this.fb.group({
    name: ['un nombre', [Validators.required, Validators.pattern('^[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s-]{4,10}$')]],
    town: ['', [Validators.required, validateTown]],
    postalCode: ['']
  });

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      name: 'Nancy',
      town: 'Madrid',
      postalCode: '28001'
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


}
