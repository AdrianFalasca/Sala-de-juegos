import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


type Card = { v: number; label: string };

function deck(): Card[] {
  const vals = [
    { v: 2, l: '2' }, { v: 3, l: '3' }, { v: 4, l: '4' }, { v: 5, l: '5' },
    { v: 6, l: '6' }, { v: 7, l: '7' }, { v: 8, l: '8' }, { v: 9, l: '9' },
    { v: 10, l: '10' }, { v: 11, l: 'J' }, { v: 12, l: 'Q' }, { v: 13, l: 'K' }, { v: 14, l: 'A' },
  ];
  const suits = ['♠', '♥', '♦', '♣'];
  const d: Card[] = [];//acumulador
  for (const s of suits) for (const val of vals) d.push({ v: val.v, label: `${val.l}${s}` });// me crea el valor para comparar y el label con los valores y palos

  for (let i = d.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]]; //las recorre de atrás para adelante y las intercabia con las aleatorias que crea
    }
  return d;
}

@Component({
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent {
  
  readonly UMBRAL_GANAR = 26;

  deck = signal<Card[]>(deck());
  actual = signal<Card | null>(null);
  proxima = signal<Card | null>(null);
  score = signal(0);
  end = signal(false);


  revelada = signal(false);          
  finalMsg = signal<string | null>(null);   

  constructor() {
    this.actual.set(this.deck().pop() || null);
    this.proxima.set(this.deck().pop() || null);
  }

  jugar(eleccion: 'MAYOR' | 'MENOR') {
    if (this.end() || !this.actual() || !this.proxima() || this.revelada()) return;

    const a = this.actual()!.v;
    const p = this.proxima()!.v;

    
    const ok = eleccion === 'MAYOR' ? p > a : p < a;//el igual te lo toma como false

    if (ok) this.score.update(s => s + 1);
    this.revelada.set(true); 
  }

  siguiente() {
   
    this.actual.set(this.proxima());
    this.proxima.set(this.deck().pop() || null);
    this.revelada.set(false);
   
    if (!this.proxima()) {
      this.end.set(true);
      this.finalMsg.set(this.score() >= this.UMBRAL_GANAR ? '¡Ganaste la partida!' : 'Perdiste la partida');
    }
  }

  reiniciar() {
    this.deck.set(deck());
    this.score.set(0);
    this.end.set(false);
    this.revelada.set(false);
    this.finalMsg.set(null);
    this.actual.set(this.deck().pop() || null);
    this.proxima.set(this.deck().pop() || null);
  }
}
