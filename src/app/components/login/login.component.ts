import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';           
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule, ReactiveFormsModule, InputTextModule, PasswordModule,
    ButtonModule, CardModule, MessageModule                      
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  cargando = false;
  errorMsg = '';

  accesosRapidos = [
    { label: 'Usuario 1', email: 'mihebi3640@merumart.com', pass: '123456' },
    { label: 'Usuario 2', email: 'mihebi3641@merumart.com', pass: '123456' }
  ];

  completar(e: string, p: string) { this.form.patchValue({ email: e, password: p }); }

  async ingresar() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }   
    this.cargando = true; this.errorMsg = '';
    const { email, password } = this.form.value as any;
    try {
      await this.auth.login(email, password);
      this.router.navigateByUrl('/');
    } catch (e: any) {
      this.errorMsg = e?.message ?? 'Error de login';
    } finally {
      this.cargando = false;
    }
  }
}
