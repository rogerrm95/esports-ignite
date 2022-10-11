import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    // CRIAR ANÚNCIO - MODAL //
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    content: {
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

    selectDate: {
        width: 150,
        height: 50,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 8
    },

    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 12,
    },

    buttons: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        padding: 12,
        borderRadius: 8,
    },

    cancelButton: {
        backgroundColor: THEME.COLORS.CAPTION_400,
        marginRight: 16
    },

    submitButton: {
        backgroundColor: THEME.COLORS.PRIMARY,
    },

    buttonText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },
});