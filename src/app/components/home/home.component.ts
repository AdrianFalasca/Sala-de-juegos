import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  usuario = computed(() => this.auth.usuario());
  //cuando cambia el estado desde otro componente que usa ese signal llama a computed y devuelve true(usuario ) si usuario no es null
  constructor(private auth: AuthService) {}
  
}
