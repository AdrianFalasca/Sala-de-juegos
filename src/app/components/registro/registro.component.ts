import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { passwordsIgualesValidator } from '../../validators/passwordIgualesValidator';

@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [
    CommonModule, ReactiveFormsModule,
    InputTextModule, PasswordModule, ButtonModule,
    CardModule, MessageModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

//es lo mismo que hacerlo con formGroup?

  form = this.fb.group(
    {
      username: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]            
    },
    { validators: passwordsIgualesValidator() }
  );

  errorMsg = '';
  cargando = false;

  async registrar() {
    if (this.form.invalid) { 
      this.form.markAllAsTouched(); 
      return; 
    }
    this.cargando = true; 
    this.errorMsg = '';
    const { username, email, password } = this.form.value as any;

    try {
      await this.auth.register(username, email, password);
      this.router.navigateByUrl('/');

    } catch (e: any) {
      this.errorMsg = e?.message?.includes('already registered')
        ? 'El usuario ya está registrado.'
        : (e?.message || 'Error al registrar');
        
    } finally {
      this.cargando = false;
    }
  }
}
