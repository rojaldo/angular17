import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  model = new Hero('','');

  submitted = false;

  // a name min 3 characters, max 8 characters, only letters, including spaces, spanish characters and hyphens
  namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s-]{3,8}$/;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero('', '');
  }

}
