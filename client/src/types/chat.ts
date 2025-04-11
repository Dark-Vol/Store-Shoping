export interface ReceivedMessage {
  role: string;
  room: number;
  text: string;
  UserId?: number;
}

export interface Message {
  role?: string;
  UserId?: number;
}
