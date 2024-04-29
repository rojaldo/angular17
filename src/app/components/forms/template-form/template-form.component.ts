import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { FormContent } from '../../../models/formcontent';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  model = new FormContent('unnomber');

  submitted = false;

  // a name min 3 characters, max 8 characters, only letters, including spaces, spanish characters and hyphens
  namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s-]{4,8}$/;

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  // a phone number, 9 digits with first digit 6, 7, 8 or 9
  phonePattern = /^[6-9]\d{8}$/;

  townPattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s-]{4,8}$/;

  postalCodePattern = /^[0-9]{5}$/;

  birthDatePattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  handleTown(town: string) {
    console.log(town);
    
  }

  onSubmit() {
    this.submitted = true; 
  }

  newHero() {
    this.model = new FormContent();
  }

}
