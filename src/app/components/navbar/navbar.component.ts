import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  usuario$ = computed(() => this.auth.usuario());

  constructor(private router: Router, public auth: AuthService) {}

  items = [
    { label: 'Home', command: () => this.router.navigateByUrl('/') },
    { label: 'Quién Soy', command: () => this.router.navigateByUrl('/about') },
  ];

  irLogin()    { this.router.navigateByUrl('/login'); }
  irRegistro() { this.router.navigateByUrl('/registro'); }
  logout()     { this.auth.logout(); }
}