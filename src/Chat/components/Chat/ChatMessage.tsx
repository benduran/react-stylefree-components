import React from 'react';

import { ChatThreadMessage } from '../../types';

export interface ChatMessageProps {
  thread: ChatThreadMessage;
}

export const ChatMessage = ({ thread: { id, message, threadId, timestamp, user } }: ChatMessageProps) => {
  return <li />;
};
