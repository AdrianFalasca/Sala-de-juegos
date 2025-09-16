import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, Validators,
  ValidatorFn, AbstractControl, ValidationErrors
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  // Validador (password === confirm)
  private passwordsIgualesValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const pass = group.get('password')?.value ?? '';
      const confirm = group.get('confirm')?.value ?? '';
      if (!pass || !confirm) return null;           
      return pass === confirm ? null : { passwordMismatch: true };
    };
  }

  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]            
    },
    { validators: this.passwordsIgualesValidator() }
  );

  errorMsg = '';
  cargando = false;

  async registrar() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.cargando = true; this.errorMsg = '';
    const { email, password } = this.form.value as any;
    try {
      await this.auth.register(email, password);
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
