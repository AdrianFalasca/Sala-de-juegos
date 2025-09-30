import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

const PALABRAS = ['APROBAR', 'MATERIA', 'CANCION', 'JUEGO', 'AHORCADO', 'CASA'];

@Component({
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {
  
  word = signal(this.randWord());
  letrasElegidas = signal<string[]>([]);
  errores = signal(0);
  maxErrores = 6;

  palabraOculta = computed(() =>
    this.word().split('').map(l => this.letrasElegidas().includes(l) ? l : '_').join(' ')
  );

  letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  get gano() { 
    return !this.palabraOculta().includes('_');
   }
  get perdio() {
     return this.errores() >= this.maxErrores;
     }

  randWord() { 
    return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
   }

  elegir(letra: string) {
    if (this.gano || this.perdio) return;
    if (this.letrasElegidas().includes(letra)) return;
    this.letrasElegidas.update(a => [...a, letra]);
    if (!this.word().includes(letra)) this.errores.update(e => e + 1);
  }

  reiniciar() {
    this.word.set(this.randWord());
    this.letrasElegidas.set([]);
    this.errores.set(0);
  }
}
