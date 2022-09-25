import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },

  userInfo: {
    maxWidth: 100,
    marginRight: 8
  },

  username: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.XS,
    textAlign: 'right'
  },

  discriminator: {
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    textAlign: 'right'
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 6,
  }
});