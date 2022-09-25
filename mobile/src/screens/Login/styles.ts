import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        width: 213,
        height: 120,
        marginTop: 74,
        marginBottom: 48
    },

    login: {
        width: '100%',
        padding: 32
    },

    discordButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.PRIMARY,
        padding: 16,
        borderRadius: 6
    },

    discordButtonText: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        paddingLeft: 8
    },

    footer: {
        marginTop: 'auto',
        marginBottom: 32
    },

    footerText: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM
    },

    footerLink: {
        color: THEME.COLORS.PRIMARY,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM
    }
});