import React from 'react';

import { TestIds } from '../../constants';
import { useConvertMessagesToThreads } from '../../hooks';
import { ChatComponentProps } from '../../types';

export const Chat = ({ messages }: ChatComponentProps) => {
  const threads = useConvertMessagesToThreads(messages);
  return <ul data-testid={TestIds.ChatList} />;
};
