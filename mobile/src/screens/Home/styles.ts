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
    marginBottom: 48
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 64
  },

  // CRIAR ANÚNCIO - BANNER // 
  adBanner: {
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 6,
    marginTop: 24,
    width: '100%',
    maxWidth: 311,
    gap: 24,
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

  // CRIAR ANÚNCIO - MODAL //
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  contentModal: {
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 32,
    width: "100%",
    height: '100%',
    marginTop: 20,
  },

  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 32
  },

  form: {
    width: '100%'
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 8
  },

  select: {
    height: 50,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 8
  },

  input: {
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    color: THEME.COLORS.TEXT,
    borderRadius: 8
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },

  inputDate: {
    width: 150
  },

  buttons: {},

  cancelButton: {},

  submitButton: {},
});