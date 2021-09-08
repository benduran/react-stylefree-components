import React from 'react';

import { CustomComponentsProvider } from '../../context';
import { useConvertMessagesToThreads } from '../../hooks';
import { ChatComponentProps } from '../../types';
import { ChatList } from './ChatList';

export const Chat = ({ components, messages }: ChatComponentProps) => {
  const { ChatList: CustomChatList } = components ?? {};
  const threads = useConvertMessagesToThreads(messages);
  return (
    <CustomComponentsProvider {...components}>
      {CustomChatList ? <CustomChatList /> : <ChatList threads={threads} />}
    </CustomComponentsProvider>
  );
};
