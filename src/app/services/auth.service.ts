import { Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';


export interface UsuarioMin { 
    id: string; 
    email: string | null;
    username: string | null;
 }


@Injectable({ providedIn: 'root' })
export class AuthService {
usuario = signal<UsuarioMin | null>(null);


constructor(private sb: SupabaseService) {

this.sb.supabase.auth.getSession().then(({ data }) => {
  const u = data.session?.user;
  if (u) {
    const username = (u.user_metadata as any)?.username ?? null; 
    this.usuario.set({ id: u.id, email: u.email ?? null, username });
  }
});



this.sb.supabase.auth.onAuthStateChange((_event, session) => {
    const u = session?.user;
    const username = (u?.user_metadata as any)?.username ?? null; 
    this.usuario.set(u ? { id: u.id, email: u.email ?? null, username } : null);
    });
}


async login(email: string, password: string) {
    const { error, data } = await this.sb.supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    await this.sb.supabase.from('auth_logs').insert({
    email,
    created_at: new Date().toISOString()
    });
    return data;
}


async register(username: string, email: string, password: string) {
    const { data, error } = await this.sb.supabase.auth.signUp({
         email, 
         password,
          options: {
          data: { username }  
        } });

    if (error) throw error;
    return data;
}


async logout() {
    await this.sb.supabase.auth.signOut();
    }
}