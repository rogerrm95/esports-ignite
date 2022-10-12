import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
  },

  header: {
    width: '100%',
    marginTop: 16,
    paddingRight: 16,
  },

  logo: {
    width: 214,
    height: 120,
    marginTop: 50,
    marginBottom: 32
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 16
  },

  // CRIAR ANÚNCIO - BANNER // 
  adBanner: {
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 6,
    marginTop: 24,
    width: '100%',
    maxWidth: 336,
    overflow: 'hidden',
  },

  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 24
  },

  bannerTitle: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 4
  },

  bannerLegend: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.XXS
  },

  buttonNewAd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    backgroundColor: THEME.COLORS.PRIMARY,
  },

  buttonNewAdLabel: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.XS,
    marginLeft: 8
  },
});