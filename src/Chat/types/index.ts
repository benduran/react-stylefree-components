import { ComponentType } from 'react';

export interface ChatUser {
  id: string;
  name: string;
  username: string;
}

/**
 * Data structure that represents a message from a user
 */
export interface ChatMessage {
  id: string;
  message: string;
  timestamp: number;
  user: ChatUser;

  threadId?: string;
}

/**
 * UI-only data structure for rendering nested threads
 */
export interface ChatThreadMessage extends ChatMessage {
  threads: ChatThreadMessage[];
}

export interface CustomChatComponents {
  MessageText: ComponentType;
  Textbox: ComponentType;
}

/**
 * Props for the Chat Component
 */
export interface ChatComponentProps {
  /**
   * Flat of chat messages to display in the component.
   * This component will then construct the recursive structure
   * required to render threads and such.
   */
  messages: ChatMessage[];

  components?: CustomChatComponents;
}
