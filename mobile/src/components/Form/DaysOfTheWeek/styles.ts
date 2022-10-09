import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 40,
        marginBottom: 12
    },

    button: {
        width: 40,
        height: 40,
        padding: 1,
        marginRight: 8,
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonUnChecked: {
        backgroundColor: THEME.COLORS.BACKGROUND_900,
    },

    buttonChecked: {
        backgroundColor: THEME.COLORS.PRIMARY,
    },

    buttonText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT
    }
});