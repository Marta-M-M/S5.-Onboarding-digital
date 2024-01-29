import { Injectable } from '@angular/core';
import { iStep } from '../interfaces/iStep.interface';

@Injectable({
  providedIn: 'root'
})
//Creamos una clase y agregamos propiedad que contenga las 3 frases, mediante un array
export class StepsPhraseService {

  public onBoardingPhrase: iStep[] = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      img: 'img/time_managment.svg',
      bgcolor: "#00A7A2"
    },

    {
      title: "Programa projectes propis:",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      img: "img/programming.svg",
      bgcolor: "#C0C0C0"
    },

    {
      title: "Procura descansar:",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: "img/meditation.svg",
      bgcolor: "#FFD700"
    }

  ];
  //Método que devuelve el array onBoardingPhrase
  getOnboardingPhrase(): iStep[] {
    return this.onBoardingPhrase;
  }
}

