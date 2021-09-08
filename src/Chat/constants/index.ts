const coerceTestId = (id: string) => (process.env.NODE_ENV === 'production' ? undefined : id);

export const TestIds = {
  ChatList: coerceTestId('Stylefree-Chat-List'),
  Loader: coerceTestId('Stylefree-Loader'),
  Textbox: coerceTestId('Stylefree-Chat-Textbox'),
  UserAvatar: coerceTestId('Stylefree-User-Avatar'),
};
