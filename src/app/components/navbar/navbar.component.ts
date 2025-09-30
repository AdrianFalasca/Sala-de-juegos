import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private router = inject(Router);
  private auth = inject(AuthService);

  usuario = computed(() => this.auth.usuario());

  items = computed<MenuItem[]>(() => {
    const base: MenuItem[] = [
      { label: 'Inicio', routerLink: '/' },
      { label: 'Quién Soy', routerLink: '/about'},
    ];

    if (this.usuario()) {
      
      base.push({ label: 'Chat', routerLink: '/chat' });

      base.push({
        label: 'Juegos',
        items: [
          { label: 'Ahorcado', routerLink: '/juegos/ahorcado' },
          { label: 'Mayor o Menor', routerLink: '/juegos/mayor-menor' },
          { label: 'El juego de los palitos', routerLink: '/juegos/palitos'},
          { label: 'Preguntados', routerLink: '/juegos/preguntados' },
        ],
      });
    }

    return base;
  });

  irLogin()    { 
    this.router.navigateByUrl('/login'); 
  }
  irRegistro() { 
    this.router.navigateByUrl('/registro'); 
  }
  async logout() {
    try { 
      await this.auth.logout();
     }
    finally { 
      this.router.navigateByUrl('/');
     }
  }
}