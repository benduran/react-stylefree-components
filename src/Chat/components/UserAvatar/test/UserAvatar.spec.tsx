import { render } from '@testing-library/react';

import { TestIds } from '../../../constants';
import { CustomComponentsProvider } from '../../../context';
import { ChatUser } from '../../../types';
import { UserAvatar } from '../UserAvatar';

describe('<UserAvatar /> tests', () => {
  it('Should show, and then hide the loader, based on whether the User Avatar image has loaded', async () => {
    const testUser: ChatUser = {
      avatarUrl: 'https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png',
      id: '12321',
      name: 'Test User',
      username: 'Test',
    };
    const result = render(
      <CustomComponentsProvider>
        <UserAvatar {...testUser} />
      </CustomComponentsProvider>,
    );
    const loader = await result.findByTestId(TestIds.Loader!);
    expect(loader).not.toBeNull();
    expect(loader.outerHTML.startsWith('<div')).toBeTruthy();
    const userAvatar = await result.findByTestId(TestIds.UserAvatar!);
    const img = userAvatar.querySelector('img');
    expect(img).not.toBeNull();
    img?.dispatchEvent(new Event('load'));
    try {
      await result.findByTestId(TestIds.Loader!);
    } catch (error) {
      const e = error as Error;
      expect(e.message).toContain('Unable to find an element');
    }
  });
});
