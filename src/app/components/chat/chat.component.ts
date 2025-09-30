import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';        
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [FormsModule, InputTextModule, ButtonModule, CardModule, CommonModule] 

})
export class ChatComponent implements OnDestroy {
  private chat = inject(ChatService);

  mensajes = signal<ChatMessage[]>([]);
  texto = '';
  cargando = true;

  constructor() {
    
    this.cargarInicial();

    // Suscripción a nuevos mensajes
    this.chat.onNewMessage((msg) => {
      if (!this.mensajes().some(m => m.id === msg.id)) {
        this.mensajes.update(arr => [...arr, msg]);
        
      }
    });
  }

 private async cargarInicial() {
    try {
      this.cargando = true;
      const data = await this.chat.getLastMessages();
      this.mensajes.set(data);

    } catch (e) {
      console.error('Error cargando mensajes', e);

    } finally {
      this.cargando = false; 
    }
  }

  async enviar() {
  const content = this.texto.trim();

  if (!content) return;
  await this.chat.send(content);  
  this.texto = '';
}



  ngOnDestroy() {
    this.chat.unsubscribe();
  }
}
