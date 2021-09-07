import { useMemo } from 'react';

import { ChatMessage, ChatThreadMessage } from '../types';

function convertChatMessagesToThread(messages: ChatMessage[], parentId?: string): ChatThreadMessage[] {
  return (
    parentId ? messages.filter(m => m.threadId === parentId) : messages.filter(m => !m.threadId || m.threadId === m.id)
  ).map(m => ({
    ...m,
    threads: convertChatMessagesToThread(
      messages.filter(nestedM => nestedM.id !== m.id),
      m.id,
    ),
  }));
}

export function useConvertMessagesToThreads(messages: ChatMessage[]): ChatThreadMessage[] {
  return useMemo((): ChatThreadMessage[] => convertChatMessagesToThread(messages), [messages]);
}
