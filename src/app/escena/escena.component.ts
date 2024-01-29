
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../interfaces/iStep.interface';
@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  //usamos @Input para recibir datos desde el componente Home (padre). Establecemos relación padre-hijo
  @Input()
  public showPhrases: iStep[] = [{
    title: '',
    description: '',
    img: '',
    bgcolor: ''
  }];

  public actualStep: number = 0;

  lastStep() {
    if (this.actualStep > 0) {
      this.actualStep--;
    } else {
      this.actualStep = this.showPhrases.length - 1;
    }
    console.log(this.actualStep);
  }

  nextStep() {
    if (this.actualStep < this.showPhrases.length - 1) {
      this.actualStep++;
    } else {
      this.actualStep = 0
    }

    console.log(this.actualStep)
  }

  activeStep() {
    this.actualStep = this.showPhrases.length
  }

}
