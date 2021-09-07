const coerceTestId = (id: string) => (process.env.NODE_ENV === 'production' ? undefined : id);

export const TestIds = {
  ChatList: coerceTestId('Stylefree-Chat-List'),
  Textbox: coerceTestId('Stylefree-Chat-Textbox'),
};
