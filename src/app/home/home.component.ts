import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { iStep } from '../interfaces/iStep.interface';
import {CommonModule} from '@angular/common';
import { StepsPhraseService } from '../services/steps.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, CommonModule],
  templateUrl: './home.component.html', //El componente Escena será hijo del componente Home pq está dentro de él.
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
    //creamos la variable showPhrasesArr
    //cambiar a showPhrasesArr el showPhrasesArr
    showPhrasesArr: iStep [] = []; //Lo consideramos un array vacio para evitar undefined y que se tenga un valor inicial antes de llamar a ngOnInit
    //Utilizamos el servicio stepsPhaseService para obtener el array con el método ngOnInit
    constructor(private stepsPhraseService: StepsPhraseService){}

  ngOnInit(): void {
    //Llamamos al servicio para obterner el array frases
    this.showPhrasesArr = this.stepsPhraseService.getOnboardingPhrase();

    //Ajustamos la ruta de las imagenes IGUAL HAY QUE QUITARLO
  //   this.showPhrasesArr.forEach(step => {
  //     step.img = step.img; //quitamos esta ruta concatenada "src/assets/img/meditation.svg" +
  // });

  //   appPasos : iStep = {
  //   title: 'Primer Paso',
  //   description: 'El primer paso siempre es el más difícil',
  //   img: '',
  //   bgcolor: '',

  // };
}}
