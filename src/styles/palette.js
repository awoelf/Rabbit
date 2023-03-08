// Colors for the entire app
export const rabbit = {
  // Colors
  background_color: '#ECE5D8',
  accent_color: '#D7B16C',
  link_color: '#900',
  box_color: '#E2DAD0',
  pressed_color: '#BD9A58',
  light_text_color: 'rgba(0, 0, 0, 0.5)',

  // Fonts
  font_shared: 'Mukta_400Regular',
  font_header1: 'CreteRound_400Regular',
  font_news: 'Newsreader_500Medium',

  // Sizes
  font_size: 16,
  font_size_header1: 40,
  font_size_header2: 22,

  // Height and width
  box_height: 50,
  button_height: 50,

  // Border
  border_radius: 15,
  border_color: 'transparent',

  // Padding
  input_padding: 20,
  header_padding_vertical: 50,
  header_padding: 20,
  container_padding: 30,

  // Margin
  margin_vertical: 5,
  card_margin_vertical: 10,

  // Button
  button_width: '100%',
};

export const rabbitMessagePalette = {
  background100: rabbit.box_color,
  background200: '#E0E0E0',
  background300: '#BDBDBD',
  background400: '#393939',
  background50: rabbit.background_color,
  background500: '#2C2C2C',
  background600: '#161616',
  background700: '#000000',
  error100: '#FDAAAA',
  error200: '#F66161',
  error300: '#DE360B',
  error400: '#BF0711',
  error500: '#9D091E',
  highlight: '#FFF2B6',
  information: '#ADC9FF',
  onBackgroundDark01: 'rgba(255,255,255,0.88)',
  onBackgroundDark02: 'rgba(0,0,0,0.25)',
  onBackgroundDark03: 'rgba(255,255,255,0.38)',
  onBackgroundDark04: 'rgba(255,255,255,0.12)',
  onBackgroundLight01: 'rgba(0,0,0,0.88)',
  onBackgroundLight02: 'rgba(0,0,0,0.50)',
  onBackgroundLight03: 'rgba(0,0,0,0.38)',
  onBackgroundLight04: 'rgba(0,0,0,0.12)',
  overlay01: 'rgba(0,0,0,0.55)',
  overlay02: 'rgba(0,0,0,0.32)',
  primary100: '#DBD1FF',
  primary200: rabbit.pressed_color,
  primary300: rabbit.accent_color,
  primary400: rabbit.accent_color,
  primary500: rabbit.accent_color,
  secondary100: '#A8E2AB',
  secondary200: '#69C085',
  secondary300: '#259C72',
  secondary400: '#027D69',
  secondary500: '#066858',
  transparent: 'transparent',

  colors: {
    background: '#FFFFFF',
    error: '#DE360B',
    onBackground01: 'rgba(0,0,0,0.88)',
    onBackground02: 'rgba(0,0,0,0.50)',
    onBackground03: 'rgba(0,0,0,0.38)',
    onBackground04: 'rgba(0,0,0,0.12)',
    onBackgroundReverse01: 'rgba(255,255,255,0.88)',
    onBackgroundReverse02: 'rgba(0,0,0,0.25)',
    onBackgroundReverse03: 'rgba(255,255,255,0.38)',
    onBackgroundReverse04: 'rgba(255,255,255,0.12)',
    primary: rabbit.accent_color,
    secondary: '#259C72',
    text: 'rgba(0,0,0,0.88)',
    ui: {
      badge: { default: { none: { background: rabbit.accent_color, text: 'black' } } },
      button: {
        contained: {
          disabled: { background: rabbit.box_color, content: 'rgba(0,0,0,0.12)' },
          enabled: { background: rabbit.accent_color, content: 'black' },
          pressed: { background: rabbit.pressed_color, content: 'black' },
        },
        text: {
          disabled: { background: 'transparent', content: 'rgba(0,0,0,0.12)' },
          enabled: { background: 'transparent', content: rabbit.accent_color },
          pressed: { background: 'transparent', content: rabbit.accent_color },
        },
      },
      dateSeparator: {
        default: { none: { background: rabbit.box_color, text: 'rgba(0,0,0,0.50)' } },
      },
      dialog: {
        default: {
          none: {
            background: rabbit.background_color,
            destructive: '#DE360B',
            highlight: 'black',
            message: 'rgba(0,0,0,0.50)',
            text: 'rgba(0,0,0,0.88)',
          },
        },
      },
      groupChannelPreview: {
        default: {
          none: {
            background: rabbit.background_color,
            bodyIcon: 'rgba(0,0,0,0.50)',
            bodyIconBackground: rabbit.box_color,
            coverBackground: 'rgba(0,0,0,0.12)',
            memberCount: 'rgba(0,0,0,0.50)',
            separator: 'rgba(0,0,0,0.12)',
            textBody: 'rgba(0,0,0,0.38)',
            textTitle: 'rgba(0,0,0,0.88)',
            textTitleCaption: 'rgba(0,0,0,0.38)',
          },
        },
      },
      header: { nav: { none: { background: rabbit.background_color, borderBottom: 'rgba(0,0,0,0.12)' } } },
      input: {
        default: {
          active: {
            background: rabbit.box_color,
            highlight: 'black',
            placeholder: 'rgba(0,0,0,0.38)',
            text: 'rgba(0,0,0,0.88)',
          },
          disabled: {
            background: rabbit.box_color,
            highlight: 'rgba(0,0,0,0.12)',
            placeholder: 'rgba(0,0,0,0.12)',
            text: 'rgba(0,0,0,0.12)',
          },
        },
        underline: {
          active: {
            background: 'transparent',
            highlight: rabbit.box_color,
            placeholder: 'rgba(0,0,0,0.38)',
            text: 'rgba(0,0,0,0.88)',
          },
          disabled: {
            background: 'transparent',
            highlight: 'rgba(0,0,0,0.12)',
            placeholder: 'rgba(0,0,0,0.12)',
            text: 'rgba(0,0,0,0.12)',
          },
        },
      },
      message: {
        incoming: {
          enabled: {
            background: rabbit.box_color,
            textEdited: 'rgba(0,0,0,0.50)',
            textMsg: 'rgba(0,0,0,0.88)',
            textSenderName: 'rgba(0,0,0,0.50)',
            textTime: 'rgba(0,0,0,0.38)',
          },
          pressed: {
            background: rabbit.box_color,
            textEdited: 'rgba(0,0,0,0.50)',
            textMsg: 'rgba(0,0,0,0.88)',
            textSenderName: 'rgba(0,0,0,0.50)',
            textTime: 'rgba(0,0,0,0.38)',
          },
        },
        outgoing: {
          enabled: {
            background: rabbit.accent_color,
            textEdited: 'rgba(0,0,0,0.25)',
            textMsg: 'black',
            textSenderName: 'transparent',
            textTime: 'rgba(0,0,0,0.38)',
          },
          pressed: {
            background: rabbit.pressed_color,
            textEdited: 'rgba(0,0,0,0.25)',
            textMsg: 'black',
            textSenderName: 'transparent',
            textTime: 'rgba(0,0,0,0.38)',
          },
        },
      },
      placeholder: { default: { none: { content: 'rgba(0,0,0,0.38)', highlight: rabbit.accent_color } } },
      profileCard: {
        default: {
          none: {
            background: '#FFFFFF',
            textBody: 'rgba(0,0,0,0.88)',
            textBodyLabel: 'rgba(0,0,0,0.50)',
            textUsername: 'rgba(0,0,0,0.88)',
          },
        },
      },
      reaction: {
        default: {
          enabled: { background: 'transparent', highlight: 'rgba(0,0,0,0.38)' },
          selected: { background: rabbit.box_color, highlight: rabbit.accent_color },
        },
        rounded: {
          enabled: { background: rabbit.box_color, highlight: 'transparent' },
          selected: { background: rabbit.box_color, highlight: 'transparent' },
        },
      },
    },
  },
};
