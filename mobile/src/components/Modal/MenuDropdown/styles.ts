import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000060'
  },

  container: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 54,
    right: 16,


    width: 148,
    backgroundColor: '#2A2634',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    zIndex: 999,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  menuText: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.XS
  },

  menuTextExit: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.XS
  }
});