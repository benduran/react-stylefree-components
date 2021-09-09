import { render } from '@testing-library/react';

import { ChatMessage, ChatUser } from '../../types';
import { useConvertMessagesToThreads } from '../useConvertMessagesToThreads';

describe('useConvertMessagesToThreads tests', () => {
  it('Should take a flat chatmessage array and convert it into the correct, nested structure', () => {
    const user1: ChatUser = {
      id: '1',
      name: 'User 1',
      username: 'User 1',
    };
    const user2: ChatUser = {
      id: '2',
      name: 'User 2',
      username: 'User2',
    };
    const messages: ChatMessage[] = [
      {
        id: '1',
        message: 'message 1a',
        timestamp: Date.now(),
        user: user1,
      },
      {
        id: '2',
        message: 'message 1b',
        timestamp: Date.now() + 1,
        user: user1,
      },
      {
        id: '3',
        message: 'message 2a',
        threadId: '1',
        timestamp: Date.now() + 2,
        user: user2,
      },
    ];
    const TestComponent = () => {
      const converted = useConvertMessagesToThreads(messages);
      expect(converted.length).toBe(2);
      const [msg1, msg2] = converted;
      expect(msg1.threads.length).toBe(1);
      expect(msg2.threads.length).toBe(0);
      return null;
    };
    render(<TestComponent />);
  });
});
