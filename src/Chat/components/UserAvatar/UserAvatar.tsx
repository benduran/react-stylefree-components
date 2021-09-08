import React, { useCallback, useEffect, useState } from 'react';

import { TestIds } from '../../constants';
import { useCustomComponents } from '../../context';
import { ChatUser } from '../../types';
import { Loader } from '../Loader';

export const UserAvatar = ({ avatarUrl, name, username }: ChatUser) => {
  const { Loader: CustomLoader } = useCustomComponents();
  const [avatarLoading, setAvatarLoading] = useState(false);

  const handleAvatarLoaded = useCallback(() => setAvatarLoading(false), []);

  useEffect(() => {
    if (avatarUrl) setAvatarLoading(true);
  }, [avatarUrl]);

  return (
    <div data-testid={TestIds.UserAvatar}>
      {avatarLoading && CustomLoader && <CustomLoader />}
      {avatarLoading && !CustomLoader && <Loader />}
      {avatarUrl && <img alt={username} onLoad={handleAvatarLoaded} src={avatarUrl} />}
      {!avatarUrl && <p>{username.charAt(0).toUpperCase()}</p>}
    </div>
  );
};
