import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import type { RealtimeChannel } from '@supabase/supabase-js'

export interface ChatMessage {
  id: number;
  email: string;
  content: string;
  created_at: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private channel: RealtimeChannel | null = null;

  constructor(private sb: SupabaseService) {}

  async getLastMessages(): Promise<ChatMessage[]> {
    const { data, error } = await this.sb.supabase
      .from('messages')
      .select('id, email, content, created_at')
    if (error) throw error;
    return data as ChatMessage[];
  }


async send(content: string) {
  const { data: { user }, error: userErr } = await this.sb.supabase.auth.getUser();
  if (userErr) throw userErr;
  const email = user?.email;

  const { error } = await this.sb.supabase.from('messages').insert({ email, content });
  if (error) throw error;
}


  onNewMessage(cb: (msg: ChatMessage) => void) {
    this.channel = this.sb.supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => cb(payload.new as ChatMessage)
      )
      .subscribe();
  }

  unsubscribe() {
    if (this.channel) {
      this.sb.supabase.removeChannel(this.channel);
      this.channel = null;
    }
  }
}
