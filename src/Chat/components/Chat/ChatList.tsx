import React, { useMemo } from 'react';

import { TestIds } from '../../constants';
import { useCustomComponents } from '../../context';
import { ChatThreadMessage } from '../../types';
import { ChatMessage } from './ChatMessage';

interface ChatListProps {
  threads: ChatThreadMessage[];
}

export const ChatList = ({ threads }: ChatListProps) => {
  const { ChatMessage: CustomChatMessage } = useCustomComponents();
  const threadsToRender = useMemo(
    () =>
      threads.map(t => (CustomChatMessage ? <CustomChatMessage key={t.id} /> : <ChatMessage key={t.id} thread={t} />)),
    [CustomChatMessage, threads],
  );
  return <ul data-testid={TestIds.ChatList}>{threadsToRender}</ul>;
};
